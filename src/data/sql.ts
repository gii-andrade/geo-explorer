/**
 * Trilhas e desafios de SQL.
 * Cada trilha cobre um nível: iniciante, intermediario, avancado.
 */

import type { Trilha, Desafio } from "../types/index.js";

export const trilhasSQL: Trilha[] = [
  {
    id: "sql-iniciante",
    tecnologia: "SQL",
    nome: "SQL para Iniciantes",
    descricao:
      "Aprenda a criar e consultar bancos de dados relacionais do zero com SQL padrão. Ideal para quem nunca trabalhou com banco de dados.",
    nivel: "iniciante",
    cargaHoraria: 18,
    modulos: [
      {
        titulo: "Introdução a Bancos de Dados Relacionais",
        descricao: "Conceitos fundamentais: tabelas, linhas, colunas e chaves.",
        duracaoEstimada: 3,
        conteudos: [
          {
            titulo: "O que é um banco de dados relacional",
            descricao:
              "Modelo relacional, SGBD (PostgreSQL, MySQL, SQLite), tabelas e relacionamentos.",
          },
          {
            titulo: "Chaves primária e estrangeira",
            descricao:
              "PRIMARY KEY, FOREIGN KEY, unicidade e integridade referencial.",
          },
        ],
      },
      {
        titulo: "DDL: Definição de Estruturas",
        descricao: "Criação e alteração de tabelas.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "CREATE TABLE e tipos de dados",
            descricao:
              "INTEGER, VARCHAR, TEXT, DATE, BOOLEAN e NUMERIC — quando usar cada tipo.",
          },
          {
            titulo: "ALTER TABLE e DROP TABLE",
            descricao:
              "Adicionar, remover e renomear colunas; excluir tabelas com segurança.",
          },
          {
            titulo: "Constraints: NOT NULL, UNIQUE, DEFAULT",
            descricao:
              "Garantias de integridade diretamente na definição da tabela.",
          },
        ],
      },
      {
        titulo: "DML: Manipulação de Dados",
        descricao: "Inserir, atualizar e excluir registros.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "INSERT INTO",
            descricao:
              "Inserção de uma ou múltiplas linhas, inserção com SELECT.",
          },
          {
            titulo: "UPDATE e DELETE",
            descricao:
              "Atualização e exclusão com WHERE — e os riscos de esquecer o WHERE.",
          },
        ],
      },
      {
        titulo: "DQL: Consultas Básicas",
        descricao: "SELECT, WHERE, ORDER BY e LIMIT.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "SELECT e projeção de colunas",
            descricao:
              "Selecionar todas as colunas (*) ou colunas específicas, uso de aliases (AS).",
          },
          {
            titulo: "WHERE e operadores de filtro",
            descricao:
              "Comparações, BETWEEN, IN, LIKE, IS NULL e combinações com AND/OR.",
          },
          {
            titulo: "ORDER BY e LIMIT",
            descricao:
              "Ordenação crescente/decrescente e limitação de resultados para paginação.",
          },
        ],
      },
    ],
  },

  {
    id: "sql-intermediario",
    tecnologia: "SQL",
    nome: "SQL Intermediário: JOINs e Agregações",
    descricao:
      "Escreva consultas mais poderosas com JOINs, funções de agregação, agrupamentos e subqueries.",
    nivel: "intermediario",
    cargaHoraria: 25,
    modulos: [
      {
        titulo: "JOINs",
        descricao: "Combinação de dados de múltiplas tabelas.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "INNER JOIN",
            descricao:
              "Retorna apenas os registros com correspondência nas duas tabelas.",
          },
          {
            titulo: "LEFT JOIN e RIGHT JOIN",
            descricao:
              "Inclusão de todos os registros de uma tabela, com NULL para ausências.",
          },
          {
            titulo: "FULL OUTER JOIN e CROSS JOIN",
            descricao:
              "União completa e produto cartesiano — quando e por que usar.",
          },
          {
            titulo: "Self JOIN",
            descricao:
              "Uma tabela unida com ela mesma — útil para hierarquias e comparações.",
          },
        ],
      },
      {
        titulo: "Agregações e Agrupamentos",
        descricao: "COUNT, SUM, AVG, GROUP BY e HAVING.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "Funções de agregação",
            descricao:
              "COUNT, SUM, AVG, MIN, MAX — aplicadas a colunas e com DISTINCT.",
          },
          {
            titulo: "GROUP BY e HAVING",
            descricao:
              "Agrupamento de resultados e filtragem de grupos com HAVING (vs. WHERE).",
          },
        ],
      },
      {
        titulo: "Subqueries",
        descricao: "Consultas aninhadas para problemas mais complexos.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "Subquery no WHERE e no FROM",
            descricao:
              "Filtros baseados em resultados de outra query e tabelas derivadas.",
          },
          {
            titulo: "EXISTS e NOT EXISTS",
            descricao:
              "Verificação de existência de registros relacionados de forma eficiente.",
          },
          {
            titulo: "Subquery correlacionada",
            descricao:
              "Subqueries que referenciam a query externa — comportamento e performance.",
          },
        ],
      },
      {
        titulo: "Funções de String e Data",
        descricao: "Manipulação de texto e datas no banco.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "Funções de string",
            descricao:
              "UPPER, LOWER, LENGTH, TRIM, SUBSTRING, CONCAT e REPLACE.",
          },
          {
            titulo: "Funções de data",
            descricao:
              "CURRENT_DATE, EXTRACT, DATE_TRUNC, INTERVAL e diferença entre datas.",
          },
        ],
      },
    ],
  },

  {
    id: "sql-avancado",
    tecnologia: "SQL",
    nome: "SQL Avançado: Performance e Recursos Modernos",
    descricao:
      "Domine Window Functions, CTEs, índices, explain plan e estratégias de otimização de queries.",
    nivel: "avancado",
    cargaHoraria: 35,
    modulos: [
      {
        titulo: "Window Functions",
        descricao: "Cálculos sobre conjuntos de linhas sem agrupamento.",
        duracaoEstimada: 9,
        conteudos: [
          {
            titulo: "ROW_NUMBER, RANK e DENSE_RANK",
            descricao:
              "Numeração e classificação de linhas dentro de partições.",
          },
          {
            titulo: "LAG e LEAD",
            descricao:
              "Acesso a valores de linhas anteriores ou posteriores na mesma partição.",
          },
          {
            titulo: "SUM e AVG como window functions",
            descricao:
              "Acumulados, médias móveis e totais parciais com OVER e PARTITION BY.",
          },
        ],
      },
      {
        titulo: "CTEs e Queries Recursivas",
        descricao: "Common Table Expressions para código limpo e hierarquias.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "WITH e CTEs simples",
            descricao:
              "Nomear subqueries para melhorar legibilidade e reutilizar resultados.",
          },
          {
            titulo: "CTEs recursivas",
            descricao:
              "Consultar hierarquias (categorias, organogramas) com WITH RECURSIVE.",
          },
        ],
      },
      {
        titulo: "Índices e Performance",
        descricao: "Estratégias para queries rápidas em produção.",
        duracaoEstimada: 9,
        conteudos: [
          {
            titulo: "Tipos de índices: B-Tree, Hash, GIN",
            descricao:
              "Quando cada tipo de índice é adequado e seus trade-offs de escrita.",
          },
          {
            titulo: "EXPLAIN e EXPLAIN ANALYZE",
            descricao:
              "Leitura do plano de execução, identificação de sequential scans e gargalos.",
          },
          {
            titulo: "Índices compostos e parciais",
            descricao:
              "Criação de índices em múltiplas colunas e índices com condição WHERE.",
          },
        ],
      },
      {
        titulo: "Transactions e Isolamento",
        descricao: "ACID, transações e níveis de isolamento.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "BEGIN, COMMIT e ROLLBACK",
            descricao:
              "Agrupamento de operações em transações atômicas.",
          },
          {
            titulo: "Níveis de isolamento",
            descricao:
              "READ COMMITTED, REPEATABLE READ, SERIALIZABLE — e os problemas que cada um previne.",
          },
        ],
      },
      {
        titulo: "Projeto: Dashboard de Vendas",
        descricao:
          "Conjunto de queries analíticas para um schema de e-commerce.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "Relatório de receita por período",
            descricao:
              "Window function de total acumulado e comparação mês a mês com LAG.",
          },
          {
            titulo: "Ranking de produtos e clientes",
            descricao:
              "DENSE_RANK para top-10 e CTE para isolar o cálculo de ranking.",
          },
        ],
      },
    ],
  },
];

export const desafiosSQL: Desafio[] = [
  {
    trilhaId: "sql-iniciante",
    nivel: "iniciante",
    titulo: "Consulta de clientes por cidade",
    enunciado:
      "Você está desenvolvendo um relatório de clientes para uma loja. Dada a tabela `clientes` com as colunas `id` (INTEGER), `nome` (VARCHAR) e `cidade` (VARCHAR), escreva uma query SQL que retorne o nome de todos os clientes da cidade de 'São Paulo', ordenados alfabeticamente pelo nome.",
    objetivo:
      "Praticar os fundamentos de SELECT com filtro WHERE e ordenação com ORDER BY.",
    requisitos: [
      "Selecionar apenas a coluna `nome`",
      "Filtrar pela cidade exatamente igual a 'São Paulo'",
      "Ordenar os resultados em ordem alfabética crescente (ASC)",
      "A query deve funcionar em PostgreSQL, MySQL e SQLite",
    ],
    criteriosConclusao: [
      "A query retorna apenas clientes de São Paulo",
      "Os nomes estão ordenados de A a Z",
      "Apenas a coluna nome aparece no resultado",
    ],
    exemplos: [
      {
        entrada: "Tabela clientes: (1, 'Carlos', 'SP'), (2, 'Ana', 'SP'), (3, 'Bruno', 'RJ')",
        saida: "Ana\nCarlos",
      },
    ],
  },
  {
    trilhaId: "sql-intermediario",
    nivel: "intermediario",
    titulo: "Total de vendas por categoria com filtro de agrupamento",
    enunciado:
      "Você precisa identificar quais categorias de produtos tiveram boa performance. Usando as tabelas `pedidos` (id, produto_id, valor NUMERIC) e `produtos` (id, nome, categoria VARCHAR), escreva uma query que retorne o nome de cada categoria e a soma total das vendas, exibindo apenas categorias com total superior a 10.000. Ordene pelo total decrescente.",
    objetivo:
      "Aplicar JOIN entre tabelas, função de agregação SUM com GROUP BY e filtragem de grupos com HAVING.",
    requisitos: [
      "Fazer INNER JOIN entre pedidos e produtos",
      "Agrupar por categoria com GROUP BY",
      "Usar HAVING (não WHERE) para filtrar o resultado agregado",
      "Ordenar pelo total em ordem decrescente",
      "Usar alias descritivo para a coluna de soma",
    ],
    criteriosConclusao: [
      "O resultado mostra apenas categorias com soma > 10000",
      "A coluna de total tem alias legível (ex: total_vendas)",
      "As categorias estão ordenadas da maior para a menor venda",
    ],
    exemplos: [
      {
        entrada: "pedidos JOIN produtos GROUP BY categoria HAVING SUM > 10000",
        saida:
          "SELECT p.categoria, SUM(pe.valor) AS total_vendas\nFROM pedidos pe\nJOIN produtos p ON pe.produto_id = p.id\nGROUP BY p.categoria\nHAVING SUM(pe.valor) > 10000\nORDER BY total_vendas DESC;",
      },
    ],
  },
  {
    trilhaId: "sql-avancado",
    nivel: "avancado",
    titulo: "Ranking mensal de vendedores com CTE e Window Function",
    enunciado:
      "Em um sistema de gestão de vendas, você precisa gerar um relatório mensal de performance. Na tabela `vendas` (vendedor_id INTEGER, valor NUMERIC, data DATE), escreva uma query que: (1) calcule o total de vendas de cada vendedor no mês corrente, (2) atribua uma posição de ranking do maior para o menor total, usando DENSE_RANK para que empates não pulem posições, e (3) organize o cálculo em uma CTE para melhorar a legibilidade.",
    objetivo:
      "Combinar CTEs para organização do código com Window Functions para cálculo de ranking — padrão fundamental em SQL analítico.",
    requisitos: [
      "Usar WITH (CTE) para isolar o cálculo do total por vendedor",
      "Filtrar o mês atual com DATE_TRUNC ou EXTRACT",
      "Usar DENSE_RANK() OVER (ORDER BY total DESC) para o ranking",
      "O resultado final deve exibir: vendedor_id, total e posicao",
      "Nenhum vendedor deve ser omitido, mesmo que empatado",
    ],
    criteriosConclusao: [
      "O resultado contém as colunas vendedor_id, total e posicao",
      "Vendedores com o mesmo total recebem a mesma posição",
      "Apenas vendas do mês atual são contabilizadas",
    ],
    exemplos: [
      {
        entrada: "CTE totais + DENSE_RANK sobre vendas do mês atual",
        saida:
          "WITH totais AS (\n  SELECT vendedor_id, SUM(valor) AS total\n  FROM vendas\n  WHERE DATE_TRUNC('month', data) = DATE_TRUNC('month', CURRENT_DATE)\n  GROUP BY vendedor_id\n)\nSELECT vendedor_id, total,\n  DENSE_RANK() OVER (ORDER BY total DESC) AS posicao\nFROM totais;",
      },
    ],
  },
];
