/**
 * Contratos de dados do Geo-Explorer.
 * Todas as interfaces e tipos compartilhados entre os módulos ficam aqui.
 */

// ─── Nível de dificuldade ────────────────────────────────────────────────────

export type Nivel = "iniciante" | "intermediario" | "avancado";

export const NIVEIS_VALIDOS: Nivel[] = ["iniciante", "intermediario", "avancado"];

// ─── Resultado de busca (discriminated union) ────────────────────────────────

export type ResultadoBusca<T> =
  | { sucesso: true; dados: T }
  | { sucesso: false; erro: string };

// ─── Trilha de aprendizagem ──────────────────────────────────────────────────

export interface Conteudo {
  /** Título do conteúdo (ex: "Variáveis e tipos de dados") */
  titulo: string;
  /** Breve descrição do que será aprendido */
  descricao: string;
}

export interface Modulo {
  /** Título do módulo (ex: "Fundamentos da linguagem") */
  titulo: string;
  /** Descrição geral do módulo */
  descricao: string;
  /** Lista de conteúdos que compõem o módulo */
  conteudos: Conteudo[];
  /** Duração estimada em horas */
  duracaoEstimada: number;
}

export interface Trilha {
  /** Identificador único (ex: "python-iniciante") */
  id: string;
  /** Nome da tecnologia (ex: "Python") */
  tecnologia: string;
  /** Nome da trilha (ex: "Python para Iniciantes") */
  nome: string;
  /** Breve descrição do que a trilha cobre */
  descricao: string;
  /** Nível de dificuldade */
  nivel: Nivel;
  /** Lista de módulos da trilha */
  modulos: Modulo[];
  /** Soma da duração de todos os módulos (em horas) */
  cargaHoraria: number;
}

// ─── Desafio de código ───────────────────────────────────────────────────────

export interface ExemploDesafio {
  entrada: string;
  saida: string;
}

export interface Desafio {
  /** ID da trilha à qual este desafio pertence */
  trilhaId: string;
  /** Nível do desafio */
  nivel: Nivel;
  /** Título do desafio */
  titulo: string;
  /** Enunciado completo do problema */
  enunciado: string;
  /** O que o aluno deve alcançar ao resolver o desafio */
  objetivo: string;
  /** Lista de requisitos técnicos que a solução deve atender */
  requisitos: string[];
  /** Critérios que indicam que o desafio foi concluído com sucesso */
  criteriosConclusao: string[];
  /** Exemplos de entrada e saída esperada */
  exemplos: ExemploDesafio[];
}

// ─── Certificado ─────────────────────────────────────────────────────────────

export interface Certificado {
  /** Código único fictício do certificado (ex: "GEO-ANA-PYI-2025001") */
  codigo: string;
  /** Nome da pessoa que concluiu a trilha */
  nome: string;
  /** Tecnologia da trilha concluída */
  tecnologia: string;
  /** Nome completo da trilha */
  nomeTrilha: string;
  /** Nível da trilha concluída */
  nivel: Nivel;
  /** Carga horária total da trilha */
  cargaHoraria: number;
  /** Data de emissão no formato DD/MM/AAAA */
  dataEmissao: string;
  /** Mensagem personalizada de conclusão */
  mensagem: string;
}
