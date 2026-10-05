import { describe, it, expect } from "vitest";
import {
  gerarCertificado,
  formatarCertificado,
  gerarCodigo,
  dataHoje,
} from "../src/commands/certificado.js";
import type { Trilha } from "../src/types/index.js";

// ─── Base de dados de teste ───────────────────────────────────────────────────

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
    id: "javascript-avancado",
    tecnologia: "JavaScript",
    nome: "JavaScript Avançado",
    descricao: "Trilha fake.",
    nivel: "avancado",
    cargaHoraria: 38,
    modulos: [],
  },
];

// ─── Testes de gerarCertificado ───────────────────────────────────────────────

describe("gerarCertificado", () => {
  it("gera certificado com nome e trilha corretos", () => {
    const resultado = gerarCertificado(
      "Ana Silva",
      "Python",
      "iniciante",
      trilhasFake
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.nome).toBe("Ana Silva");
      expect(resultado.dados.tecnologia).toBe("Python");
      expect(resultado.dados.nomeTrilha).toBe("Python para Iniciantes");
      expect(resultado.dados.nivel).toBe("iniciante");
      expect(resultado.dados.cargaHoraria).toBe(20);
    }
  });

  it("remove espaços extras do nome", () => {
    const resultado = gerarCertificado(
      "  João  ",
      "Python",
      "iniciante",
      trilhasFake
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.nome).toBe("João");
    }
  });

  it("a busca de tecnologia é insensível a maiúsculas e minúsculas", () => {
    const comMinuscula = gerarCertificado("Ana", "python", "iniciante", trilhasFake);
    const comMaiuscula = gerarCertificado("Ana", "PYTHON", "iniciante", trilhasFake);

    expect(comMinuscula.sucesso).toBe(true);
    expect(comMaiuscula.sucesso).toBe(true);
  });

  it("retorna erro para nome vazio", () => {
    const resultado = gerarCertificado("", "Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("nome");
      expect(resultado.erro).toContain("vazio");
    }
  });

  it("retorna erro para nome com apenas espaços", () => {
    const resultado = gerarCertificado("   ", "Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("vazio");
    }
  });

  it("retorna erro para nível inválido", () => {
    const resultado = gerarCertificado("Ana", "Python", "master", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("master");
      expect(resultado.erro).toContain("inválido");
    }
  });

  it("retorna erro para tecnologia inexistente", () => {
    const resultado = gerarCertificado("Ana", "Rust", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Rust");
      expect(resultado.erro).toContain("não encontrada");
    }
  });

  it("mensagem de erro de tecnologia lista as disponíveis", () => {
    const resultado = gerarCertificado("Ana", "Go", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("JavaScript");
    }
  });

  it("retorna erro quando tecnologia existe mas não tem aquele nível", () => {
    // Python existe, mas apenas nível "iniciante" está no fake
    const resultado = gerarCertificado("Ana", "Python", "avancado", trilhasFake);

    expect(resultado.sucesso).toBe(false);
    if (!resultado.sucesso) {
      expect(resultado.erro).toContain("Python");
      expect(resultado.erro).toContain("avancado");
    }
  });

  it("o certificado contém a data de emissão no formato DD/MM/AAAA", () => {
    const resultado = gerarCertificado("Ana", "Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.dataEmissao).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    }
  });

  it("o certificado contém um código no formato esperado", () => {
    const resultado = gerarCertificado("Ana", "Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.codigo).toMatch(/^GEO-[A-Z]{3}-[A-Z]{3}-\d{7}$/);
    }
  });

  it("o mesmo input sempre gera o mesmo código (determinístico)", () => {
    const r1 = gerarCertificado("Ana Silva", "Python", "iniciante", trilhasFake);
    const r2 = gerarCertificado("Ana Silva", "Python", "iniciante", trilhasFake);

    expect(r1.sucesso).toBe(true);
    expect(r2.sucesso).toBe(true);
    if (r1.sucesso && r2.sucesso) {
      // O código é baseado em nome + trilhaId + data, então com a mesma data
      // e mesmos parâmetros, o resultado é sempre idêntico.
      expect(r1.dados.codigo).toBe(r2.dados.codigo);
    }
  });

  it("o certificado contém uma mensagem personalizada para o nível", () => {
    const resultado = gerarCertificado("Ana", "Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.mensagem.length).toBeGreaterThan(0);
    }
  });
});

// ─── Testes de gerarCodigo ────────────────────────────────────────────────────

describe("gerarCodigo", () => {
  it("retorna código no formato GEO-XXX-XXX-AAAA###", () => {
    const codigo = gerarCodigo("Ana Silva", "python-iniciante", "01/01/2025");
    expect(codigo).toMatch(/^GEO-[A-Z]{3}-[A-Z]{3}-\d{7}$/);
  });

  it("o prefixo do nome usa as 3 primeiras letras em maiúsculo", () => {
    const codigo = gerarCodigo("Carlos", "python-iniciante", "01/01/2025");
    expect(codigo.startsWith("GEO-CAR-")).toBe(true);
  });

  it("o prefixo da trilha reflete tecnologia e nível", () => {
    // "python-iniciante" → PY + I → PYI
    const codigo = gerarCodigo("Ana", "python-iniciante", "01/01/2025");
    expect(codigo).toContain("-PYI-");
  });

  it("nomes com acentos geram prefixo sem caracteres especiais", () => {
    const codigo = gerarCodigo("Ângela", "python-iniciante", "01/01/2025");
    // Ângela → ANG (sem ^)
    expect(codigo.startsWith("GEO-ANG-")).toBe(true);
  });

  it("é determinístico com os mesmos parâmetros", () => {
    const c1 = gerarCodigo("Ana", "python-iniciante", "01/01/2025");
    const c2 = gerarCodigo("Ana", "python-iniciante", "01/01/2025");
    expect(c1).toBe(c2);
  });

  it("produz códigos diferentes para nomes diferentes", () => {
    const c1 = gerarCodigo("Ana", "python-iniciante", "01/01/2025");
    const c2 = gerarCodigo("Bob", "python-iniciante", "01/01/2025");
    expect(c1).not.toBe(c2);
  });
  it("prefixo da trilha para javascript-intermediario é JAI", () => {
    const codigo = gerarCodigo("Ana", "javascript-intermediario", "01/01/2025");
    expect(codigo).toContain("-JAI-");
  });

  it("prefixo da trilha para javascript-avancado é JAA", () => {
    const codigo = gerarCodigo("Ana", "javascript-avancado", "01/01/2025");
    expect(codigo).toContain("-JAA-");
  });

  it("prefixo da trilha para sql-avancado é SQA", () => {
    const codigo = gerarCodigo("Ana", "sql-avancado", "01/01/2025");
    expect(codigo).toContain("-SQA-");
  });

  it("produz códigos diferentes para trilhas diferentes", () => {
    const c1 = gerarCodigo("Ana", "python-iniciante",    "01/01/2025");
    const c2 = gerarCodigo("Ana", "javascript-iniciante", "01/01/2025");
    expect(c1).not.toBe(c2);
  });
});

// ─── Testes de dataHoje ───────────────────────────────────────────────────────

describe("dataHoje", () => {
  it("retorna a data no formato DD/MM/AAAA", () => {
    const data = dataHoje();
    expect(data).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
  });

  it("o ano retornado é o ano atual", () => {
    const data = dataHoje();
    const anoAtual = new Date().getFullYear().toString();
    expect(data.endsWith(anoAtual)).toBe(true);
  });
});

// ─── Testes de formatarCertificado ───────────────────────────────────────────

describe("formatarCertificado", () => {
  const certFake = {
    codigo: "GEO-ANA-PYI-2025042",
    nome: "Ana Silva",
    tecnologia: "Python",
    nomeTrilha: "Python para Iniciantes",
    nivel: "iniciante" as const,
    cargaHoraria: 20,
    dataEmissao: "01/01/2025",
    mensagem: "Você deu o primeiro passo.",
  };

  it("contém o nome da pessoa em maiúsculas", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("ANA SILVA");
  });

  it("contém o nome da trilha", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("Python para Iniciantes");
  });

  it("contém a tecnologia", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("Python");
  });

  it("contém a carga horária", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("20 horas");
  });

  it("contém a data de emissão", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("01/01/2025");
  });

  it("contém o código do certificado", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("GEO-ANA-PYI-2025042");
  });

  it("contém a mensagem personalizada", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("Você deu o primeiro passo.");
  });

  it("contém o aviso de certificado fictício", () => {
    const saida = formatarCertificado(certFake);
    expect(saida).toContain("fictício");
  });

  it("exibe ícone 🟡 para nível intermediario", () => {
    const certIntermediario = { ...certFake, nivel: "intermediario" as const };
    const saida = formatarCertificado(certIntermediario);
    expect(saida).toContain("🟡");
  });

  it("exibe ícone 🔴 para nível avancado", () => {
    const certAvancado = { ...certFake, nivel: "avancado" as const };
    const saida = formatarCertificado(certAvancado);
    expect(saida).toContain("🔴");
  });

  it("exibe ícone 🟢 para nível iniciante", () => {
    const saida = formatarCertificado(certFake); // certFake é iniciante
    expect(saida).toContain("🟢");
  });
});

// ─── Testes adicionais de gerarCertificado — mensagens por nível ──────────────

describe("gerarCertificado — mensagem personalizada por nível", () => {
  it("mensagem de iniciante menciona 'primeiro passo'", () => {
    const resultado = gerarCertificado("Ana", "Python", "iniciante", trilhasFake);

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.mensagem).toContain("primeiro passo");
    }
  });

  it("mensagem de avancado menciona 'excelência'", () => {
    const resultado = gerarCertificado(
      "Ana",
      "JavaScript",
      "avancado",
      trilhasFake
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.mensagem).toContain("excelência");
    }
  });

  it("mensagem de intermediario menciona 'consistência'", () => {
    // Precisa de uma trilha intermediária no fake
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

    const resultado = gerarCertificado(
      "Ana",
      "Python",
      "intermediario",
      trilhasComIntermediario
    );

    expect(resultado.sucesso).toBe(true);
    if (resultado.sucesso) {
      expect(resultado.dados.mensagem).toContain("consistência");
    }
  });

  it("cada nível produz uma mensagem diferente", () => {
    const trilhasCompletas: Trilha[] = [
      trilhasFake[0]!, // python-iniciante
      {
        id: "python-intermediario",
        tecnologia: "Python",
        nome: "Python Intermediário",
        descricao: "Fake.",
        nivel: "intermediario",
        cargaHoraria: 30,
        modulos: [],
      },
      {
        id: "python-avancado",
        tecnologia: "Python",
        nome: "Python Avançado",
        descricao: "Fake.",
        nivel: "avancado",
        cargaHoraria: 40,
        modulos: [],
      },
    ];

    const ini = gerarCertificado("Ana", "Python", "iniciante",    trilhasCompletas);
    const int = gerarCertificado("Ana", "Python", "intermediario", trilhasCompletas);
    const ava = gerarCertificado("Ana", "Python", "avancado",      trilhasCompletas);

    expect(ini.sucesso && int.sucesso && ava.sucesso).toBe(true);
    if (ini.sucesso && int.sucesso && ava.sucesso) {
      expect(ini.dados.mensagem).not.toBe(int.dados.mensagem);
      expect(int.dados.mensagem).not.toBe(ava.dados.mensagem);
      expect(ini.dados.mensagem).not.toBe(ava.dados.mensagem);
    }
  });
});
