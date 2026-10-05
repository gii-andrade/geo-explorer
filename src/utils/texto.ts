/**
 * Utilitários de formatação de texto compartilhados pelos comandos.
 *
 * Centraliza constantes e funções usadas em trilha.ts, desafio.ts e
 * certificado.ts, evitando duplicação e garantindo consistência visual.
 */

import type { Nivel } from "../types/index.js";

// ─── Largura padrão de layout ─────────────────────────────────────────────────

/** Largura padrão para separadores e certificados (colunas). */
export const LARGURA_PADRAO = 62;

// ─── Separadores ─────────────────────────────────────────────────────────────

export const SEPARADOR_SIMPLES = "─".repeat(LARGURA_PADRAO);
export const SEPARADOR_DUPLO   = "═".repeat(LARGURA_PADRAO);

// ─── Ícones de nível ─────────────────────────────────────────────────────────

export const ÍCONES_NÍVEL: Record<Nivel, string> = {
  iniciante:    "🟢",
  intermediario: "🟡",
  avancado:     "🔴",
};

// ─── Funções ──────────────────────────────────────────────────────────────────

/** Capitaliza a primeira letra de uma string. */
export function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
