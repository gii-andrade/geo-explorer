import { describe, it, expect } from "vitest";
import { buscarDesafio, formatarDesafio } from "../src/commands/desafio.js";
import type { Trilha, Desafio } from "../src/types/index.js";

// ─── Dados de teste injetáveis ────────────────────────────────────────────────
// Isolados dos dados reais — os testes são totalmente determinísticos.

const trilhasFake: Trilha[] = [
  {
    id: "python-iniciante",
    tecnologia: "Python",
    nome: "Python para Iniciantes",
    descricao: "Trilha fake.",
    nivel: "iniciante",
    cargaHoraria: 20,
    modulos: [],
  },
  {
    id: "javascript-intermediario",
    tecnologia: "JavaScript",
    nome: "JavaScript Intermediário",
    descricao: "Trilha fake.",
    nivel: "intermediario",
    cargaHoraria: 28,
    modulos: [],
  },
];

const desafiosFake: Desafio[] = [
  {
    trilhaId: "python-iniciante",
    nivel: "iniciante",
    titulo: "Desafio Python Iniciante",
    enunciado: "Enunciado do desafio de Python iniciante.",
    objetivo: "Objetivo do desafio.",
    requisitos: ["Requisito 1", "Requisito 2"],
    criteriosConclusao: ["Critério A", "Critério B"],
    exemplos: [
      { entrada: "funcao(1)", saida: "2" },
    ],
  },
  {
    trilhaId: "javascript-intermediario",
    nivel: "intermediario",
    titulo: "Desafio JS Intermediário",
    enunciado: "Enunciado do desafio de JavaScript intermediário.",
    objetivo: "Objetivo do desafio.",
    requisitos: ["Requisito X"],
    criteriosConclusao: ["Critério Z"],
    exemplos: [],
  },
];

// ─── Testes de buscarDesafio ──────────────────────────────────────────────────

describe("buscarDesafio", () => {
  it("retorna o desafio quando tecnologia e nível existem", () => {
    const resultado = buscarDesafio(
      "Python",
      "iniciante",
      trilhasFake,
      desafiosFake
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.trilhaId).toBe("python-iniciante");
      expect(resultado.dados.titulo).toBe("Desafio Python Iniciante");
    }
  });

  it("a busca de tecnologia é insensível a maiúsculas e minúsculas", () => {
    const porMinuscula = buscarDesafio("python", "iniciante", trilhasFake, desafiosFake);
    const porMaiuscula = buscarDesafio("PYTHON", "iniciante", trilhasFake, desafiosFake);
    const porMista    = buscarDesafio("PyThOn", "iniciante", trilhasFake, desafiosFake);

    expect(porMinuscula.sucesso).toBe(true);
    expect(porMaiuscula.sucesso).toBe(true);
    expect(porMista.sucesso).toBe(true);
  });

  it("retorna erro quando a tecnologia não existe", () => {
    const resultado = buscarDesafio("Rust", "iniciante", trilhasFake, desafiosFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Rust");
      expect(resultado.erro).toContain("não encontrada");
    }
  });

  it("mensagem de erro de tecnologia inexistente lista as disponíveis", () => {
    const resultado = buscarDesafio("Go", "iniciante", trilhasFake, desafiosFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("JavaScript");
    }
  });

  it("retorna erro quando o nível é inválido", () => {
    const resultado = buscarDesafio("Python", "expert", trilhasFake, desafiosFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("expert");
      expect(resultado.erro).toContain("inválido");
    }
  });

  it("retorna erro quando a tecnologia existe mas não há desafio para aquele nível", () => {
    // Python existe nas trilhas, mas só há desafio para "iniciante" no fake
    const resultado = buscarDesafio("Python", "avancado", trilhasFake, desafiosFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("avancado");
    }
  });

  it("retorna desafio para JavaScript intermediário", () => {
    const resultado = buscarDesafio(
      "JavaScript",
      "intermediario",
      trilhasFake,
      desafiosFake
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.trilhaId).toBe("javascript-intermediario");
    }
  });
});

// ─── Testes adicionais de buscarDesafio ───────────────────────────────────────

describe("buscarDesafio — campos retornados e casos limite", () => {
  it("retorna todos os campos do desafio encontrado", () => {
    const resultado = buscarDesafio(
      "Python",
      "iniciante",
      trilhasFake,
      desafiosFake
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      const d = resultado.dados;
      expect(d.titulo).toBe("Desafio Python Iniciante");
      expect(d.enunciado).toBe("Enunciado do desafio de Python iniciante.");
      expect(d.objetivo).toBe("Objetivo do desafio.");
      expect(d.requisitos).toEqual(["Requisito 1", "Requisito 2"]);
      expect(d.criteriosConclusao).toEqual(["Critério A", "Critério B"]);
      expect(d.exemplos).toHaveLength(1);
      expect(d.exemplos[0]).toEqual({ entrada: "funcao(1)", saida: "2" });
    }
  });

  it("ignora espaços extras no parâmetro tecnologia", () => {
    const resultado = buscarDesafio(
      "  Python  ",
      "iniciante",
      trilhasFake,
      desafiosFake
    );

    expect(resultado.sucesso).toBe(true);
  });

  it("retorna erro para tecnologia como string vazia", () => {
    const resultado = buscarDesafio("", "iniciante", trilhasFake, desafiosFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("não encontrada");
    }
  });

  it("retorna erro quando a trilha existe mas não há desafio cadastrado para o trilhaId", () => {
    // Cenário: trilha existe no catálogo (intermediario no fake), mas não há
    // desafio com esse trilhaId no array de desafios
    const trilhasComIntermediario: Trilha[] = [
      ...trilhasFake,
      {
        id: "python-intermediario",
        tecnologia: "Python",
        nome: "Python Intermediário",
        descricao: "Fake.",
        nivel: "intermediario",
        cargaHoraria: 30,
        modulos: [],
      },
    ];

    const resultado = buscarDesafio(
      "Python",
      "intermediario",
      trilhasComIntermediario, // trilha existe
      desafiosFake             // mas não há desafio para "python-intermediario"
    );

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("intermediario");
    }
  });
});

// ─── Testes de formatarDesafio ────────────────────────────────────────────────

describe("formatarDesafio", () => {
  const desafio = desafiosFake[0]!;

  it("contém o título do desafio na saída", () => {
    const saida = formatarDesafio(desafio);
    expect(saida).toContain("Desafio Python Iniciante");
  });

  it("contém o enunciado na saída", () => {
    const saida = formatarDesafio(desafio);
    expect(saida).toContain("Enunciado do desafio de Python iniciante.");
  });

  it("contém o objetivo na saída", () => {
    const saida = formatarDesafio(desafio);
    expect(saida).toContain("Objetivo do desafio.");
  });

  it("contém todos os requisitos na saída", () => {
    const saida = formatarDesafio(desafio);
    expect(saida).toContain("Requisito 1");
    expect(saida).toContain("Requisito 2");
  });

  it("contém os critérios de conclusão na saída", () => {
    const saida = formatarDesafio(desafio);
    expect(saida).toContain("Critério A");
    expect(saida).toContain("Critério B");
  });

  it("contém o exemplo de entrada e saída", () => {
    const saida = formatarDesafio(desafio);
    expect(saida).toContain("funcao(1)");
    expect(saida).toContain("2");
  });

  it("não exibe seção de exemplos quando o desafio não tem exemplos", () => {
    const saida = formatarDesafio(desafiosFake[1]!);
    expect(saida).not.toContain("Exemplos:");
  });
});
