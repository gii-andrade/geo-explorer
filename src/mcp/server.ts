#!/usr/bin/env node

/**
 * Servidor MCP do Geo-Explorer.
 *
 * Responsabilidade: expor as funcionalidades do projeto via protocolo MCP,
 * permitindo que ferramentas externas (Claude Desktop, VS Code, etc.) as
 * acessem sem duplicar qualquer regra de negócio.
 *
 * Este arquivo é um adaptador puro:
 *   chamada MCP → função já existente nos commands → resposta MCP
 *
 * Ferramentas expostas:
 *   • buscar_trilha      → buscarTrilha()   + formatarTrilha()
 *   • buscar_desafio     → buscarDesafio()  + formatarDesafio()
 *   • gerar_certificado  → gerarCertificado() + formatarCertificado()
 *
 * Transporte: stdio (padrão para processos locais gerenciados por MCP clients).
 *
 * ⚠️  Use sempre console.error para logs — console.log escreve no stdout que
 *    é o canal do protocolo MCP e corromperia a comunicação.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { buscarTrilha, formatarTrilha } from "../commands/trilha.js";
import { buscarDesafio, formatarDesafio } from "../commands/desafio.js";
import {
  gerarCertificado,
  formatarCertificado,
} from "../commands/certificado.js";
import { NIVEIS_VALIDOS } from "../types/index.js";

// ─── Criação do servidor ──────────────────────────────────────────────────────

const server = new McpServer({
  name: "geo-explorer",
  version: "1.0.0",
});

// ─── Schemas de nível compartilhado ──────────────────────────────────────────
// Derivado de NIVEIS_VALIDOS para manter sincronismo com src/types/index.ts.
// Se um novo nível for adicionado lá, basta atualizar o array — aqui fica
// atualizado automaticamente.

const nivelSchema = z
  .enum(NIVEIS_VALIDOS as [string, ...string[]])
  .describe('Nível de dificuldade: "iniciante", "intermediario" ou "avancado"');

// ─── Tool 1: buscar_trilha ────────────────────────────────────────────────────

server.registerTool(
  "buscar_trilha",
  {
    description:
      "Busca uma trilha de aprendizagem pelo nome da tecnologia e nível de dificuldade. " +
      "Retorna nome, descrição, módulos, conteúdos e carga horária total da trilha.",
    inputSchema: {
      tecnologia: z
        .string()
        .min(1)
        .describe(
          'Nome da tecnologia desejada (ex: "Python", "JavaScript", "Java", "SQL")'
        ),
      nivel: nivelSchema,
    },
  },
  ({ tecnologia, nivel }) => {
    const resultado = buscarTrilha(tecnologia, nivel);

    if (!resultado.sucesso) {
      return {
        content: [{ type: "text", text: resultado.erro }],
        isError: true,
      };
    }

    return {
      content: [{ type: "text", text: formatarTrilha(resultado.dados) }],
    };
  }
);

// ─── Tool 2: buscar_desafio ───────────────────────────────────────────────────

server.registerTool(
  "buscar_desafio",
  {
    description:
      "Retorna um desafio de programação para uma tecnologia e nível específicos. " +
      "Inclui enunciado, objetivo, requisitos técnicos, exemplos de entrada/saída " +
      "e critérios de conclusão.",
    inputSchema: {
      tecnologia: z
        .string()
        .min(1)
        .describe(
          'Nome da tecnologia (ex: "Python", "JavaScript", "Java", "SQL")'
        ),
      nivel: nivelSchema,
    },
  },
  ({ tecnologia, nivel }) => {
    const resultado = buscarDesafio(tecnologia, nivel);

    if (!resultado.sucesso) {
      return {
        content: [{ type: "text", text: resultado.erro }],
        isError: true,
      };
    }

    return {
      content: [{ type: "text", text: formatarDesafio(resultado.dados) }],
    };
  }
);

// ─── Tool 3: gerar_certificado ────────────────────────────────────────────────

server.registerTool(
  "gerar_certificado",
  {
    description:
      "Gera um certificado fictício de conclusão para uma pessoa que completou uma trilha. " +
      "O certificado inclui nome, trilha concluída, carga horária, data de emissão " +
      "e um código identificador único. Para fins educacionais.",
    inputSchema: {
      nome: z
        .string()
        .min(1)
        .describe("Nome completo da pessoa que concluiu a trilha"),
      tecnologia: z
        .string()
        .min(1)
        .describe(
          'Nome da tecnologia da trilha concluída (ex: "Python", "SQL")'
        ),
      nivel: nivelSchema,
    },
  },
  ({ nome, tecnologia, nivel }) => {
    const resultado = gerarCertificado(nome, tecnologia, nivel);

    if (!resultado.sucesso) {
      return {
        content: [{ type: "text", text: resultado.erro }],
        isError: true,
      };
    }

    return {
      content: [
        { type: "text", text: formatarCertificado(resultado.dados) },
      ],
    };
  }
);

// ─── Inicialização ────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("🗺️  Geo-Explorer MCP server running on stdio");
}

main().catch((error) => {
  console.error("Erro fatal no servidor MCP:", error);
  process.exit(1);
});
