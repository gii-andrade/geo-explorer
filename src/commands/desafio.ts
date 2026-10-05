/**
 * Comando: desafio
 *
 * Responsabilidades:
 *   - buscarDesafio(): lógica pura de consulta — testável e sem efeitos colaterais
 *   - formatarDesafio(): transforma o objeto Desafio em texto formatado para o terminal
 *
 * Estratégia de busca:
 *   tecnologia + nível → deriva o trilhaId → encontra o desafio
 */

import { trilhas, desafios } from "../data/trilhas.js";
import type { Trilha, Desafio, Nivel, ResultadoBusca } from "../types/index.js";
import { NIVEIS_VALIDOS } from "../types/index.js";
import {
  SEPARADOR_SIMPLES as SEPARADOR,
  SEPARADOR_DUPLO,
  ÍCONES_NÍVEL,
  capitalizar,
} from "../utils/texto.js";

// ─── Lógica de busca (pura, sem console.log) ─────────────────────────────────

/**
 * Busca um desafio pela tecnologia e nível informados.
 *
 * Estratégia:
 *   1. Valida o nível
 *   2. Normaliza a tecnologia (case-insensitive)
 *   3. Verifica se a tecnologia existe no catálogo de trilhas
 *   4. Deriva o trilhaId: "<tecnologia-lowercase>-<nivel>"
 *   5. Localiza o desafio correspondente
 *
 * @param tecnologia  Nome da tecnologia (ex: "Python"). Insensível a maiúsculas.
 * @param nivel       Nível desejado: "iniciante" | "intermediario" | "avancado"
 * @param fonteTrilhas  Array de trilhas para validação (injetável nos testes)
 * @param fonteDesafios Array de desafios para busca (injetável nos testes)
 */
export function buscarDesafio(
  tecnologia: string,
  nivel: string,
  fonteTrilhas: Trilha[] = trilhas,
  fonteDesafios: Desafio[] = desafios
): ResultadoBusca<Desafio> {
  // 1. Validar nível
  if (!NIVEIS_VALIDOS.includes(nivel as Nivel)) {
    return {
      sucesso: false,
      erro: `Nível "${nivel}" inválido. Use: ${NIVEIS_VALIDOS.join(", ")}.`,
    };
  }

  // 2. Normalizar tecnologia para comparação case-insensitive
  const tecNormalizada = tecnologia.trim().toLowerCase();

  // 3. Verificar se a tecnologia existe (consultando o catálogo de trilhas)
  const tecnologiaExiste = fonteTrilhas.some(
    (t) => t.tecnologia.toLowerCase() === tecNormalizada
  );

  if (!tecnologiaExiste) {
    const disponiveis = [
      ...new Set(fonteTrilhas.map((t) => t.tecnologia)),
    ].join(", ");
    return {
      sucesso: false,
      erro: `Tecnologia "${tecnologia}" não encontrada. Disponíveis: ${disponiveis}.`,
    };
  }

  // 4. Derivar o trilhaId esperado e localizar o desafio
  const trilhaId = `${tecNormalizada}-${nivel}`;
  const desafio = fonteDesafios.find((d) => d.trilhaId === trilhaId);

  if (!desafio) {
    return {
      sucesso: false,
      erro: `Nenhum desafio encontrado para "${tecnologia}" no nível "${nivel}".`,
    };
  }

  return { sucesso: true, dados: desafio };
}

// ─── Formatação para o terminal ───────────────────────────────────────────────

/**
 * Formata um Desafio em texto legível para exibição no terminal.
 */
export function formatarDesafio(desafio: Desafio, fonteTrilhas: Trilha[] = trilhas): string {
  const nivelIcone = ÍCONES_NÍVEL[desafio.nivel];
  // Busca o nome correto da tecnologia via trilhaId para preservar o case original ("JavaScript", não "Javascript")
  const trilha = fonteTrilhas.find((t) => t.id === desafio.trilhaId);
  const tecnologia = trilha?.tecnologia ?? capitalizar(desafio.trilhaId.split("-")[0]!);
  const linhas: string[] = [];

  linhas.push(SEPARADOR_DUPLO);
  linhas.push(`💡 ${desafio.titulo}`);
  linhas.push(SEPARADOR_DUPLO);
  linhas.push(`📌 Tecnologia : ${tecnologia}`);
  linhas.push(`${nivelIcone} Nível       : ${capitalizar(desafio.nivel)}`);
  linhas.push("");

  // Enunciado
  linhas.push("📋 Enunciado:");
  linhas.push(SEPARADOR);
  linhas.push(desafio.enunciado);
  linhas.push("");

  // Objetivo
  linhas.push("🎯 Objetivo:");
  linhas.push(`   ${desafio.objetivo}`);
  linhas.push("");

  // Requisitos
  linhas.push(`📌 Requisitos (${desafio.requisitos.length}):`);
  desafio.requisitos.forEach((req, i) => {
    linhas.push(`   ${i + 1}. ${req}`);
  });
  linhas.push("");

  // Exemplos de entrada/saída
  if (desafio.exemplos.length > 0) {
    linhas.push("🔢 Exemplos:");
    linhas.push(SEPARADOR);
    desafio.exemplos.forEach((ex, i) => {
      if (desafio.exemplos.length > 1) linhas.push(`  Exemplo ${i + 1}:`);
      linhas.push(`  Entrada : ${ex.entrada}`);
      linhas.push(`  Saída   : ${ex.saida}`);
    });
    linhas.push("");
  }

  // Critérios de conclusão
  linhas.push(`✅ Critérios de conclusão:`);
  desafio.criteriosConclusao.forEach((criterio) => {
    linhas.push(`   ✓ ${criterio}`);
  });

  linhas.push(SEPARADOR_DUPLO);
  return linhas.join("\n");
}

