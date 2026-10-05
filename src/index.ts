#!/usr/bin/env node

/**
 * Geo-Explorer — ponto de entrada da CLI.
 * Lê os argumentos do terminal e despacha para o comando correto.
 *
 * Uso:
 *   geo-explorer trilha <tecnologia> <nivel>
 *   geo-explorer desafio <tecnologia> <nivel>
 *   geo-explorer certificado "<nome>" <tecnologia> <nivel>
 */

import { buscarTrilha, formatarTrilha } from "./commands/trilha.js";
import { buscarDesafio, formatarDesafio } from "./commands/desafio.js";
import { gerarCertificado, formatarCertificado } from "./commands/certificado.js";

// ─── Ponto de entrada ─────────────────────────────────────────────────────────

function main(): void {
  // process.argv = ["node", "index.js", <comando>, ...args]
  const [, , comando, ...args] = process.argv;

  switch (comando) {
    case "trilha": {
      const [tecnologia, nivel] = args;

      if (!tecnologia || !nivel) {
        console.error("❌ Uso: geo-explorer trilha <tecnologia> <nivel>");
        console.error("   Exemplo: geo-explorer trilha Python iniciante");
        process.exit(1);
      }

      const resultado = buscarTrilha(tecnologia, nivel);

      if (!resultado.sucesso) {
        console.error(`❌ ${resultado.erro}`);
        process.exit(1);
      }

      console.log(formatarTrilha(resultado.dados));
      break;
    }

    case "desafio": {
      const [tecnologia, nivel] = args;

      if (!tecnologia || !nivel) {
        console.error("❌ Uso: geo-explorer desafio <tecnologia> <nivel>");
        console.error("   Exemplo: geo-explorer desafio JavaScript intermediario");
        process.exit(1);
      }

      const resultado = buscarDesafio(tecnologia, nivel);

      if (!resultado.sucesso) {
        console.error(`❌ ${resultado.erro}`);
        process.exit(1);
      }

      console.log(formatarDesafio(resultado.dados));
      break;
    }

    case "certificado": {
      // O nome pode conter espaços — deve ser passado entre aspas no terminal.
      const [nome, tecnologia, nivel] = args;

      if (!nome || !tecnologia || !nivel) {
        console.error(
          '❌ Uso: geo-explorer certificado "<nome>" <tecnologia> <nivel>'
        );
        console.error(
          '   Exemplo: geo-explorer certificado "Ana Silva" Python intermediario'
        );
        process.exit(1);
      }

      const resultado = gerarCertificado(nome, tecnologia, nivel);

      if (!resultado.sucesso) {
        console.error(`❌ ${resultado.erro}`);
        process.exit(1);
      }

      console.log(formatarCertificado(resultado.dados));
      break;
    }

    default: {
      console.log("🗺️  Geo-Explorer v1.0.0");
      console.log("");
      console.log("Uso: geo-explorer <comando> [argumentos]");
      console.log("");
      console.log("Comandos disponíveis:");
      console.log(
        '  trilha <tecnologia> <nivel>               Exibe a trilha de aprendizagem'
      );
      console.log(
        '  desafio <tecnologia> <nivel>              Retorna um desafio de código'
      );
      console.log(
        '  certificado "<nome>" <tecnologia> <nivel> Gera um certificado fictício'
      );
      console.log("");
      console.log("Níveis disponíveis: iniciante | intermediario | avancado");
      console.log("");
      console.log("Exemplos:");
      console.log("  geo-explorer trilha Python iniciante");
      console.log("  geo-explorer desafio JavaScript intermediario");
      console.log('  geo-explorer certificado "Ana Silva" Python avancado');
    }
  }
}

main();
