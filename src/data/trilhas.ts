/**
 * Agregador central da base de dados do Geo-Explorer.
 *
 * Este é o único arquivo que os comandos (trilha, desafio, certificado)
 * precisam importar para acessar todos os dados.
 *
 * Para adicionar uma nova tecnologia:
 *   1. Crie src/data/<tecnologia>.ts seguindo o mesmo padrão
 *   2. Importe e espalhe os arrays abaixo
 *   3. Nenhum outro arquivo precisa ser alterado
 */

import { trilhasPython, desafiosPython } from "./python.js";
import { trilhasJava, desafiosJava } from "./java.js";
import { trilhasJavaScript, desafiosJavaScript } from "./javascript.js";
import { trilhasSQL, desafiosSQL } from "./sql.js";

import type { Trilha, Desafio } from "../types/index.js";

/** Todas as trilhas cadastradas no sistema */
export const trilhas: Trilha[] = [
  ...trilhasPython,
  ...trilhasJava,
  ...trilhasJavaScript,
  ...trilhasSQL,
];

/** Todos os desafios cadastrados no sistema */
export const desafios: Desafio[] = [
  ...desafiosPython,
  ...desafiosJava,
  ...desafiosJavaScript,
  ...desafiosSQL,
];
