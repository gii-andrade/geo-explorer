/**
 * Comando: trilha
 *
 * Responsabilidades:
 *   - buscarTrilha(): lógica pura de consulta — testável e sem efeitos colaterais
 *   - formatarTrilha(): transforma o objeto Trilha em texto formatado para o terminal
 */

import { trilhas } from "../data/trilhas.js";
import type { Trilha, Nivel, ResultadoBusca } from "../types/index.js";
import { NIVEIS_VALIDOS } from "../types/index.js";
import { SEPARADOR_SIMPLES as SEPARADOR, ÍCONES_NÍVEL, capitalizar } from "../utils/texto.js";

// ─── Lógica de busca (pura, sem console.log) ─────────────────────────────────

/**
 * Busca uma trilha pela tecnologia e nível informados.
 *
 * Retorna um ResultadoBusca:
 *   - { sucesso: true,  dados: Trilha }  — quando a trilha é encontrada
 *   - { sucesso: false, erro: string }   — quando tecnologia ou nível são inválidos
 *
 * @param tecnologia  Nome da tecnologia (ex: "Python"). Insensível a maiúsculas.
 * @param nivel       Nível desejado: "iniciante" | "intermediario" | "avancado"
 * @param fonte       Array de trilhas a consultar (injetável nos testes)
 */
export function buscarTrilha(
  tecnologia: string,
  nivel: string,
  fonte: Trilha[] = trilhas
): ResultadoBusca<Trilha> {
  // 1. Validar nível
  if (!NIVEIS_VALIDOS.includes(nivel as Nivel)) {
    return {
      sucesso: false,
      erro: `Nível "${nivel}" inválido. Use: ${NIVEIS_VALIDOS.join(", ")}.`,
    };
  }

  // 2. Normalizar a tecnologia para comparação case-insensitive
  const tecNormalizada = tecnologia.trim().toLowerCase();

  // 3. Verificar se existe alguma trilha com essa tecnologia (qualquer nível)
  const tecnologiaExiste = fonte.some(
    (t) => t.tecnologia.toLowerCase() === tecNormalizada
  );

  if (!tecnologiaExiste) {
    const tecnologias = [...new Set(fonte.map((t) => t.tecnologia))].join(", ");
    return {
      sucesso: false,
      erro: `Tecnologia "${tecnologia}" não encontrada. Disponíveis: ${tecnologias}.`,
    };
  }

  // 4. Buscar a trilha com tecnologia + nível
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

  return { sucesso: true, dados: trilha };
}

// ─── Formatação para o terminal ───────────────────────────────────────────────

/**
 * Formata uma Trilha em texto legível para exibição no terminal.
 */
export function formatarTrilha(trilha: Trilha): string {
  const nivelIcone = ÍCONES_NÍVEL[trilha.nivel];
  const linhas: string[] = [];

  linhas.push(SEPARADOR);
  linhas.push(`🗺️  ${trilha.nome}`);
  linhas.push(SEPARADOR);
  linhas.push(`📌 Tecnologia : ${trilha.tecnologia}`);
  linhas.push(`${nivelIcone} Nível       : ${capitalizar(trilha.nivel)}`);
  linhas.push(`⏱️  Carga total : ${trilha.cargaHoraria}h`);
  linhas.push(`📄 Descrição   : ${trilha.descricao}`);
  linhas.push("");

  linhas.push(`📚 Módulos (${trilha.modulos.length}):`);
  linhas.push(SEPARADOR);

  trilha.modulos.forEach((modulo, i) => {
    linhas.push(
      `  ${i + 1}. ${modulo.titulo}  [${modulo.duracaoEstimada}h]`
    );
    linhas.push(`     ${modulo.descricao}`);

    modulo.conteudos.forEach((conteudo) => {
      linhas.push(`     • ${conteudo.titulo}`);
      linhas.push(`       ${conteudo.descricao}`);
    });

    if (i < trilha.modulos.length - 1) linhas.push("");
  });

  linhas.push(SEPARADOR);
  return linhas.join("\n");
}

