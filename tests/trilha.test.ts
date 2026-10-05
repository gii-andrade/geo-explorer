import { describe, it, expect } from "vitest";
import { buscarTrilha, formatarTrilha } from "../src/commands/trilha.js";
import type { Trilha } from "../src/types/index.js";

// ─── Base de dados de teste ───────────────────────────────────────────────────
// Injetada via parâmetro — os testes não dependem dos dados reais do projeto.

const trilhasFake: Trilha[] = [
  {
    id: "python-iniciante",
    tecnologia: "Python",
    nome: "Python para Iniciantes",
    descricao: "Trilha de teste para Python iniciante.",
    nivel: "iniciante",
    cargaHoraria: 20,
    modulos: [
      {
        titulo: "Fundamentos",
        descricao: "Módulo de fundamentos.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Variáveis",
            descricao: "Como declarar variáveis em Python.",
          },
        ],
      },
    ],
  },
  {
    id: "python-avancado",
    tecnologia: "Python",
    nome: "Python Avançado",
    descricao: "Trilha de teste para Python avançado.",
    nivel: "avancado",
    cargaHoraria: 40,
    modulos: [],
  },
  {
    id: "javascript-iniciante",
    tecnologia: "JavaScript",
    nome: "JavaScript para Iniciantes",
    descricao: "Trilha de teste para JavaScript iniciante.",
    nivel: "iniciante",
    cargaHoraria: 20,
    modulos: [],
  },
];

// ─── Testes de buscarTrilha ───────────────────────────────────────────────────

describe("buscarTrilha", () => {
  it("retorna a trilha quando tecnologia e nível existem", () => {
    const resultado = buscarTrilha("Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.id).toBe("python-iniciante");
      expect(resultado.dados.tecnologia).toBe("Python");
      expect(resultado.dados.nivel).toBe("iniciante");
    }
  });

  it("a busca é insensível a maiúsculas e minúsculas", () => {
    const porMinuscula = buscarTrilha("python", "iniciante", trilhasFake);
    const porMaiuscula = buscarTrilha("PYTHON", "iniciante", trilhasFake);
    const porMista = buscarTrilha("PyThOn", "iniciante", trilhasFake);

    expect(porMinuscula.sucesso).toBe(true);
    expect(porMaiuscula.sucesso).toBe(true);
    expect(porMista.sucesso).toBe(true);
  });

  it("retorna erro quando a tecnologia não existe", () => {
    const resultado = buscarTrilha("Rust", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Rust");
      expect(resultado.erro).toContain("não encontrada");
    }
  });

  it("retorna erro quando o nível é inválido", () => {
    const resultado = buscarTrilha("Python", "expert", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("expert");
      expect(resultado.erro).toContain("inválido");
    }
  });

  it("retorna erro quando a tecnologia existe mas não tem aquele nível", () => {
    // Python existe, mas não há trilha de nível "intermediario" no fake
    const resultado = buscarTrilha("Python", "intermediario", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("intermediario");
    }
  });

  it("mensagem de erro de tecnologia inexistente lista as disponíveis", () => {
    const resultado = buscarTrilha("Go", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("JavaScript");
    }
  });
});

// ─── Testes adicionais de buscarTrilha ────────────────────────────────────────

describe("buscarTrilha — campos retornados e casos limite", () => {
  it("retorna o nome, descrição e carga horária corretos da trilha", () => {
    const resultado = buscarTrilha("Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.nome).toBe("Python para Iniciantes");
      expect(resultado.dados.descricao).toBe("Trilha de teste para Python iniciante.");
      expect(resultado.dados.cargaHoraria).toBe(20);
    }
  });

  it("retorna os módulos da trilha", () => {
    const resultado = buscarTrilha("Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.modulos).toHaveLength(1);
      expect(resultado.dados.modulos[0]!.titulo).toBe("Fundamentos");
      expect(resultado.dados.modulos[0]!.conteudos).toHaveLength(1);
    }
  });

  it("ignora espaços extras no parâmetro tecnologia", () => {
    const resultado = buscarTrilha("  Python  ", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.tecnologia).toBe("Python");
    }
  });

  it("retorna erro para tecnologia como string vazia", () => {
    const resultado = buscarTrilha("", "iniciante", trilhasFake);

    // String vazia não bate com nenhuma tecnologia → erro de "não encontrada"
    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("não encontrada");
    }
  });

  it("retorna todos os três níveis disponíveis para Python no fake", () => {
    const iniciante    = buscarTrilha("Python", "iniciante",    trilhasFake);
    const avancado     = buscarTrilha("Python", "avancado",     trilhasFake);
    const intermediario = buscarTrilha("Python", "intermediario", trilhasFake);

    expect(iniciante.sucesso).toBe(true);
    expect(avancado.sucesso).toBe(true);
    // Python intermediário não existe no fake — deve falhar com mensagem correta
    expect(intermediario.sucesso).toBe(false);
    if (!intermediario.sucesso) {
      expect(intermediario.erro).toContain("intermediario");
    }
  });
});

// ─── Testes de formatarTrilha ─────────────────────────────────────────────────

describe("formatarTrilha", () => {
  const trilha = trilhasFake[0]!;

  it("contém o nome da trilha na saída", () => {
    const saida = formatarTrilha(trilha);
    expect(saida).toContain("Python para Iniciantes");
  });

  it("contém a tecnologia e o nível", () => {
    const saida = formatarTrilha(trilha);
    expect(saida).toContain("Python");
    expect(saida).toContain("Iniciante");
  });

  it("contém a carga horária total", () => {
    const saida = formatarTrilha(trilha);
    expect(saida).toContain("20h");
  });

  it("contém o título do módulo e do conteúdo", () => {
    const saida = formatarTrilha(trilha);
    expect(saida).toContain("Fundamentos");
    expect(saida).toContain("Variáveis");
  });
});
