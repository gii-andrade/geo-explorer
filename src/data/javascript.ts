/**
 * Trilhas e desafios de JavaScript.
 * Cada trilha cobre um nível: iniciante, intermediario, avancado.
 */

import type { Trilha, Desafio } from "../types/index.js";

export const trilhasJavaScript: Trilha[] = [
  {
    id: "javascript-iniciante",
    tecnologia: "JavaScript",
    nome: "JavaScript para Iniciantes",
    descricao:
      "Aprenda a linguagem da web do zero: sintaxe, manipulação do DOM e primeiros programas interativos no navegador.",
    nivel: "iniciante",
    cargaHoraria: 20,
    modulos: [
      {
        titulo: "Fundamentos do JavaScript",
        descricao: "Variáveis, tipos e operadores.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "var, let e const",
            descricao:
              "Diferenças de escopo, hoisting e boas práticas de declaração.",
          },
          {
            titulo: "Tipos de dados e coerção",
            descricao:
              "String, Number, Boolean, null, undefined e Symbol; coerção implícita e explícita.",
          },
          {
            titulo: "Operadores e template literals",
            descricao:
              "Operadores aritméticos, lógicos, de comparação (== vs ===) e template strings.",
          },
        ],
      },
      {
        titulo: "Controle de Fluxo e Funções",
        descricao: "Condicionais, laços e declaração de funções.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "if/else, switch e operador ternário",
            descricao:
              "Tomada de decisão e a forma compacta com operador ternário.",
          },
          {
            titulo: "for, while e for...of",
            descricao:
              "Laços clássicos e iteração moderna sobre arrays e strings.",
          },
          {
            titulo: "Funções: declaration vs. expression",
            descricao:
              "Diferença entre function declaration e function expression, hoisting e arrow functions.",
          },
        ],
      },
      {
        titulo: "Arrays e Objetos",
        descricao: "As estruturas de dados mais usadas no dia a dia.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Arrays: criação e métodos essenciais",
            descricao:
              "push, pop, shift, unshift, slice, splice e iteração com forEach.",
          },
          {
            titulo: "Objetos literais",
            descricao:
              "Criação, acesso por ponto e colchete, destructuring e spread operator.",
          },
        ],
      },
      {
        titulo: "DOM e Eventos",
        descricao: "Manipulação do HTML com JavaScript.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "Seleção de elementos",
            descricao:
              "querySelector, getElementById e querySelectorAll.",
          },
          {
            titulo: "Manipulação de conteúdo e estilo",
            descricao:
              "innerHTML, textContent, classList e style.",
          },
          {
            titulo: "Eventos e addEventListener",
            descricao:
              "click, submit, input — registro de eventos e o objeto Event.",
          },
        ],
      },
    ],
  },

  {
    id: "javascript-intermediario",
    tecnologia: "JavaScript",
    nome: "JavaScript Intermediário: ES6+ e Assincronismo",
    descricao:
      "Explore os recursos modernos do JavaScript: desestruturação, módulos, Promises e a sintaxe async/await.",
    nivel: "intermediario",
    cargaHoraria: 28,
    modulos: [
      {
        titulo: "ES6+ na Prática",
        descricao: "Recursos modernos que transformaram o JavaScript.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "Destructuring de arrays e objetos",
            descricao:
              "Extração elegante de valores, aliases e valores padrão.",
          },
          {
            titulo: "Spread e rest operators",
            descricao:
              "Clonagem de arrays/objetos, merge de coleções e parâmetros variádicos.",
          },
          {
            titulo: "Módulos: import e export",
            descricao:
              "Named exports, default exports, re-exports e o sistema de módulos ES.",
          },
          {
            titulo: "Classes em JavaScript",
            descricao:
              "Sintaxe de classe, constructor, herança com extends e super.",
          },
        ],
      },
      {
        titulo: "Programação Assíncrona",
        descricao: "Callbacks, Promises e async/await.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "O Event Loop e callbacks",
            descricao:
              "Como o JavaScript executa código assíncrono e o problema do callback hell.",
          },
          {
            titulo: "Promises: then, catch, finally",
            descricao:
              "Criação e encadeamento de Promises, Promise.all e Promise.race.",
          },
          {
            titulo: "async/await",
            descricao:
              "Sintaxe síncrona para código assíncrono, tratamento de erros com try/catch.",
          },
        ],
      },
      {
        titulo: "Array Methods Avançados",
        descricao: "map, filter, reduce e outros métodos funcionais.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "map e filter",
            descricao:
              "Transformação e filtragem de arrays sem loops explícitos.",
          },
          {
            titulo: "reduce e acumuladores",
            descricao:
              "Redução de arrays a um único valor: somas, agrupamentos e pipelines.",
          },
          {
            titulo: "find, some, every e flat",
            descricao:
              "Busca, verificação de condições e achatamento de arrays aninhados.",
          },
        ],
      },
      {
        titulo: "Fetch API e Consumo de APIs",
        descricao: "Requisições HTTP com a Fetch API.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "fetch() e o ciclo Request/Response",
            descricao:
              "Fazendo GET e POST, cabeçalhos, status HTTP e parsing de JSON.",
          },
          {
            titulo: "Tratamento de erros em requisições",
            descricao:
              "Verificação de response.ok, erros de rede e padrões de retry.",
          },
        ],
      },
    ],
  },

  {
    id: "javascript-avancado",
    tecnologia: "JavaScript",
    nome: "JavaScript Avançado: Padrões e Performance",
    descricao:
      "Aprofunde-se em padrões de projeto, closures, protótipos, Web APIs modernas e otimização de performance.",
    nivel: "avancado",
    cargaHoraria: 38,
    modulos: [
      {
        titulo: "Protótipos e o Sistema de Objetos",
        descricao: "A herança prototípica por baixo das classes.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "Prototype chain",
            descricao:
              "Como a busca por propriedades sobe na cadeia de protótipos.",
          },
          {
            titulo: "Object.create e herança manual",
            descricao:
              "Criação de objetos sem class e configuração explícita do prototype.",
          },
          {
            titulo: "this: contexto e armadilhas",
            descricao:
              "Comportamento de this em funções normais vs. arrow functions e uso de bind/call/apply.",
          },
        ],
      },
      {
        titulo: "Closures e Padrões Funcionais",
        descricao: "Closures, currying e composição de funções.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Closures na prática",
            descricao:
              "Fábricas de funções, contadores privados e módulos com IIFE.",
          },
          {
            titulo: "Currying e aplicação parcial",
            descricao:
              "Transformação de funções multi-argumento e reutilização via aplicação parcial.",
          },
          {
            titulo: "Composição e pipe",
            descricao:
              "Combinar funções pequenas em pipelines de transformação.",
          },
        ],
      },
      {
        titulo: "Web APIs e Performance",
        descricao: "APIs do navegador e técnicas de otimização.",
        duracaoEstimada: 10,
        conteudos: [
          {
            titulo: "Web Workers",
            descricao:
              "Execução de código em thread separada para tarefas pesadas sem travar a UI.",
          },
          {
            titulo: "IntersectionObserver e lazy loading",
            descricao:
              "Carregamento sob demanda de imagens e componentes com a Intersection Observer API.",
          },
          {
            titulo: "Debounce, throttle e memoização",
            descricao:
              "Técnicas para reduzir chamadas excessivas e cachear resultados de funções.",
          },
        ],
      },
      {
        titulo: "Padrões de Projeto em JS",
        descricao: "Design patterns aplicados ao JavaScript moderno.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Observer e Event Emitter",
            descricao:
              "Implementação do padrão Observer para desacoplar componentes.",
          },
          {
            titulo: "Factory e Builder",
            descricao:
              "Criação de objetos complexos de forma flexível e testável.",
          },
          {
            titulo: "Proxy e Reflect",
            descricao:
              "Interceptação de operações em objetos com o Proxy da ES6 e a API Reflect.",
          },
        ],
      },
      {
        titulo: "Projeto: Reatividade do Zero",
        descricao:
          "Implementação de um mini-sistema de reatividade inspirado no Vue.js.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Rastreamento de dependências com Proxy",
            descricao:
              "Detecção de leituras e escritas em objetos para notificar observadores.",
          },
          {
            titulo: "Atualização automática do DOM",
            descricao:
              "Conectar estado reativo à atualização de elementos HTML.",
          },
        ],
      },
    ],
  },
];

export const desafiosJavaScript: Desafio[] = [
  {
    trilhaId: "javascript-iniciante",
    nivel: "iniciante",
    titulo: "Contador de vogais",
    enunciado:
      "Você está criando uma ferramenta de análise de texto. Implemente a função `contarVogais(texto)` que recebe uma string e retorna a quantidade de vogais presentes (a, e, i, o, u), ignorando distinção entre maiúsculas e minúsculas. Espaços, números e caracteres especiais devem ser ignorados.",
    objetivo:
      "Praticar manipulação de strings, iteração e uso de expressões regulares ou métodos de array em JavaScript.",
    requisitos: [
      "Criar uma função chamada `contarVogais` que recebe uma string",
      "Considerar as vogais: a, e, i, o, u (sem acentuação)",
      "A contagem deve ser case-insensitive",
      "Retornar um número inteiro",
      "Não usar bibliotecas externas",
    ],
    criteriosConclusao: [
      "contarVogais('Hello World') retorna 3",
      "contarVogais('JavaScript') retorna 3",
      "contarVogais('AEIOU') retorna 5",
      "contarVogais('xyz') retorna 0",
    ],
    exemplos: [
      { entrada: "contarVogais('Hello World')", saida: "3" },
      { entrada: "contarVogais('JavaScript')", saida: "3" },
    ],
  },
  {
    trilhaId: "javascript-intermediario",
    nivel: "intermediario",
    titulo: "Promise com timeout",
    enunciado:
      "Em aplicações reais, requisições podem demorar indefinidamente. Implemente a função `comTimeout(promise, ms)` que recebe qualquer Promise e um tempo limite em milissegundos. Se a Promise original não resolver dentro do prazo, a função deve rejeitar com o erro 'Tempo esgotado'. Use Promise.race para implementar a solução.",
    objetivo:
      "Aplicar composição de Promises com Promise.race e criar abstrações de controle de tempo assíncrono.",
    requisitos: [
      "Implementar usando Promise.race",
      "O timeout deve ser criado com new Promise + setTimeout",
      "Rejeitar com a mensagem exata 'Tempo esgotado' ao expirar",
      "Se a promise original resolver antes do prazo, o timeout deve ser ignorado",
      "Não usar async/await na implementação interna",
    ],
    criteriosConclusao: [
      "comTimeout(Promise.resolve('ok'), 1000) resolve com 'ok'",
      "comTimeout(new Promise(() => {}), 100) rejeita com 'Tempo esgotado' após 100ms",
      "A promise original que resolve antes do prazo não é afetada",
    ],
    exemplos: [
      {
        entrada: "await comTimeout(fetch('/api/lento'), 3000)",
        saida: "Rejeita com Error('Tempo esgotado') se demorar mais de 3s",
      },
    ],
  },
  {
    trilhaId: "javascript-avancado",
    nivel: "avancado",
    titulo: "Implementar debounce do zero",
    enunciado:
      "O debounce é uma das técnicas mais usadas em interfaces web para evitar disparos excessivos de eventos (digitação, scroll, resize). Implemente a função `debounce(fn, delay)` que retorna uma nova função: ela acumula as chamadas e só executa `fn` depois que `delay` milissegundos passarem sem uma nova chamada. O contexto `this` e os argumentos da última chamada devem ser preservados.",
    objetivo:
      "Dominar closures com estado mutável, setTimeout/clearTimeout e preservação de contexto de função.",
    requisitos: [
      "Implementar sem bibliotecas externas",
      "Usar closure para manter o estado do timer entre chamadas",
      "Cancelar o timer anterior a cada nova chamada com clearTimeout",
      "Preservar os argumentos da última chamada na execução final",
      "Retornar uma função (não executar fn imediatamente)",
    ],
    criteriosConclusao: [
      "Chamadas rápidas em sequência resultam em apenas uma execução de fn",
      "fn é chamada com os argumentos da última invocação",
      "Após o delay sem novas chamadas, fn é executada exatamente uma vez",
    ],
    exemplos: [
      {
        entrada:
          "const buscar = debounce(console.log, 300);\nbuscar('a'); buscar('ab'); buscar('abc');",
        saida: '"abc"  // apenas a última chamada é executada após 300ms',
      },
    ],
  },
];
