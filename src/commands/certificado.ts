/**
 * Comando: certificado
 *
 * Responsabilidades:
 *   - gerarCertificado(): lógica pura — valida entradas, busca a trilha e
 *     monta o objeto Certificado com código fictício e data automática.
 *   - formatarCertificado(): transforma o objeto em texto estruturado com borda
 *     ASCII. Esta camada pode ser substituída futuramente por HTML/PDF sem
 *     alterar nada mais.
 *   - gerarCodigo(): utilitário puro que produz o identificador fictício.
 */

import { trilhas } from "../data/trilhas.js";
import type { Trilha, Certificado, Nivel, ResultadoBusca } from "../types/index.js";
import { NIVEIS_VALIDOS } from "../types/index.js";
import {
  LARGURA_PADRAO as LARGURA,
  SEPARADOR_DUPLO as BORDA_H,
  SEPARADOR_SIMPLES as BORDA_INTERNA,
  ÍCONES_NÍVEL,
  capitalizar,
} from "../utils/texto.js";

// ─── Constantes ──────────────────────────────────────────────────────────────

const MENSAGENS_POR_NIVEL: Record<Nivel, string> = {
  iniciante:
    "Você deu o primeiro passo em uma jornada de aprendizado. " +
    "Cada linha de código escrita a partir de agora constrói sua base.",
  intermediario:
    "Você demonstrou consistência e aprofundamento técnico. " +
    "Está pronto para enfrentar desafios mais complexos com confiança.",
  avancado:
    "Você alcançou um nível de excelência que poucos atingem. " +
    "Seu domínio sobre a tecnologia abre portas para projetos de alto impacto.",
};

// ─── Lógica de geração (pura, sem console.log) ───────────────────────────────

/**
 * Gera um certificado fictício para a pessoa que concluiu uma trilha.
 *
 * @param nome        Nome da pessoa (não pode ser vazio)
 * @param tecnologia  Tecnologia da trilha (ex: "Python")
 * @param nivel       Nível da trilha ("iniciante" | "intermediario" | "avancado")
 * @param fonte       Array de trilhas a consultar (injetável nos testes)
 */
export function gerarCertificado(
  nome: string,
  tecnologia: string,
  nivel: string,
  fonte: Trilha[] = trilhas
): ResultadoBusca<Certificado> {
  // 1. Validar nome
  if (!nome || nome.trim().length === 0) {
    return { sucesso: false, erro: "O nome da pessoa não pode ser vazio." };
  }

  // 2. Validar nível
  if (!NIVEIS_VALIDOS.includes(nivel as Nivel)) {
    return {
      sucesso: false,
      erro: `Nível "${nivel}" inválido. Use: ${NIVEIS_VALIDOS.join(", ")}.`,
    };
  }

  // 3. Normalizar tecnologia (case-insensitive)
  const tecNormalizada = tecnologia.trim().toLowerCase();

  // 4. Verificar se a tecnologia existe
  const tecnologiaExiste = fonte.some(
    (t) => t.tecnologia.toLowerCase() === tecNormalizada
  );

  if (!tecnologiaExiste) {
    const disponiveis = [...new Set(fonte.map((t) => t.tecnologia))].join(", ");
    return {
      sucesso: false,
      erro: `Tecnologia "${tecnologia}" não encontrada. Disponíveis: ${disponiveis}.`,
    };
  }

  // 5. Buscar a trilha para obter nome e carga horária exatos
  const trilha = fonte.find(
    (t) =>
      t.tecnologia.toLowerCase() === tecNormalizada &&
      t.nivel === (nivel as Nivel)
  );

  if (!trilha) {
    return {
      sucesso: false,
      erro: `Nenhuma trilha de "${tecnologia}" encontrada para o nível "${nivel}".`,
    };
  }

  // 6. Montar o certificado
  const nomeLimpo = nome.trim();
  const dataEmissao = dataHoje();
  const codigo = gerarCodigo(nomeLimpo, trilha.id, dataEmissao);

  const certificado: Certificado = {
    codigo,
    nome: nomeLimpo,
    tecnologia: trilha.tecnologia,
    nomeTrilha: trilha.nome,
    nivel: trilha.nivel,
    cargaHoraria: trilha.cargaHoraria,
    dataEmissao,
    mensagem: MENSAGENS_POR_NIVEL[trilha.nivel],
  };

  return { sucesso: true, dados: certificado };
}

// ─── Formatação para o terminal ───────────────────────────────────────────────

/**
 * Formata um Certificado como documento de texto estruturado com borda ASCII.
 *
 * A separação entre gerarCertificado() e formatarCertificado() permite que
 * no futuro esta função seja substituída por uma versão HTML ou PDF sem
 * qualquer alteração na lógica de negócio.
 */
export function formatarCertificado(cert: Certificado): string {
  const linhas: string[] = [];

  linhas.push(BORDA_H);
  linhas.push(centralizar("🏆  CERTIFICADO DE CONCLUSÃO  🏆", LARGURA));
  linhas.push(centralizar("Geo-Explorer — Trilhas de Aprendizagem", LARGURA));
  linhas.push(BORDA_H);
  linhas.push("");

  linhas.push(centralizar("Certificamos que", LARGURA));
  linhas.push("");
  linhas.push(centralizar(`✦  ${cert.nome.toUpperCase()}  ✦`, LARGURA));
  linhas.push("");
  linhas.push(centralizar("concluiu com êxito a trilha", LARGURA));
  linhas.push("");
  linhas.push(centralizar(`« ${cert.nomeTrilha} »`, LARGURA));
  linhas.push("");

  linhas.push(BORDA_INTERNA);
  linhas.push(coluna("📌 Tecnologia", cert.tecnologia));
  linhas.push(coluna(`${iconeNivel(cert.nivel)} Nível`, capitalizar(cert.nivel)));
  linhas.push(coluna("⏱️  Carga horária", `${cert.cargaHoraria} horas`));
  linhas.push(coluna("📅 Data de conclusão", cert.dataEmissao));
  linhas.push(coluna("🔑 Código", cert.codigo));
  linhas.push(BORDA_INTERNA);
  linhas.push("");

  // Mensagem de conclusão quebrada para não ultrapassar a largura
  linhas.push("💬 " + cert.mensagem);
  linhas.push("");

  linhas.push(BORDA_INTERNA);
  linhas.push(centralizar("* Certificado fictício emitido para fins educacionais *", LARGURA));
  linhas.push(centralizar("* Geo-Explorer — projeto DIO *", LARGURA));
  linhas.push(BORDA_H);

  return linhas.join("\n");
}

// ─── Utilitários ─────────────────────────────────────────────────────────────

/**
 * Gera um código fictício de certificado no formato:
 *   GEO-<3 letras do nome>-<3 letras da trilha>-<AAAA><sequência>
 *
 * Exemplo: GEO-ANA-PYI-2025001
 *
 * O número final é derivado de um hash simples dos parâmetros, tornando
 * o código reproduzível (mesma entrada → mesmo código) sem colisões óbvias.
 */
export function gerarCodigo(
  nome: string,
  trilhaId: string,
  dataEmissao: string
): string {
  const prefixoNome = nome
    .normalize("NFD")                         // decompõe acentos
    .replace(/[\u0300-\u036f]/g, "")          // remove diacríticos
    .replace(/[^a-zA-Z]/g, "")               // remove não-letras
    .slice(0, 3)
    .toUpperCase()
    .padEnd(3, "X");                          // garante 3 chars

  // Prefixo da trilha: primeiras 2 letras da tecnologia + 1ª letra do nível
  // O nível é sempre o ÚLTIMO segmento; a tecnologia é tudo antes.
  // Ex: "python-iniciante"      → tec="python",     nivel="iniciante"  → "PYI"
  // Ex: "javascript-avancado"   → tec="javascript",  nivel="avancado"   → "JAA"
  // (robusto mesmo se a tecnologia contiver hífen no futuro)
  const partes = trilhaId.split("-");
  const nivelSlug = partes[partes.length - 1] ?? "";
  const tecSlug = partes.slice(0, -1).join("-");
  const prefixoTrilha = (
    tecSlug.slice(0, 2) + nivelSlug.slice(0, 1)
  ).toUpperCase().padEnd(3, "X");

  // Número sequencial: hash determinístico simples
  const semente = `${nome}|${trilhaId}|${dataEmissao}`;
  const hash = [...semente].reduce(
    (acc, char) => (acc * 31 + char.charCodeAt(0)) & 0x7fffffff,
    0
  );
  const ano = dataEmissao.split("/")[2] ?? new Date().getFullYear().toString();
  const sequencia = String(hash % 1000).padStart(3, "0");

  return `GEO-${prefixoNome}-${prefixoTrilha}-${ano}${sequencia}`;
}

/** Retorna a data de hoje no formato DD/MM/AAAA */
export function dataHoje(): string {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const ano = hoje.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

/** Centraliza texto dentro de uma largura fixa.
 *
 * Usa uma estimativa: caracteres ASCII contam como 1 coluna, os demais
 * (incluindo a maioria dos emojis) como 2. Pode não alinhar perfeitamente
 * emojis que ocupam larguras variáveis (ex: flags), mas é suficiente para
 * o layout em texto puro do certificado.
 */
function centralizar(texto: string, largura: number): string {
  const larguraEstimada = [...texto].reduce(
    (acc, c) => acc + (c.codePointAt(0)! > 127 ? 2 : 1),
    0
  );
  const padding = Math.max(0, Math.floor((largura - larguraEstimada) / 2));
  return " ".repeat(padding) + texto;
}

/** Formata uma linha de dois campos: "  Rótulo  :  Valor" */
function coluna(rotulo: string, valor: string): string {
  return `  ${rotulo.padEnd(22)}  ${valor}`;
}

function iconeNivel(nivel: Nivel): string {
  return ÍCONES_NÍVEL[nivel];
}
