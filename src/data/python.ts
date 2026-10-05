/**
 * Trilhas e desafios de Python.
 * Cada trilha cobre um nível: iniciante, intermediario, avancado.
 */

import type { Trilha, Desafio } from "../types/index.js";

export const trilhasPython: Trilha[] = [
  {
    id: "python-iniciante",
    tecnologia: "Python",
    nome: "Python para Iniciantes",
    descricao:
      "Dê os primeiros passos na programação com Python. Aprenda a sintaxe básica, estruturas de controle e como criar seus primeiros programas.",
    nivel: "iniciante",
    cargaHoraria: 20,
    modulos: [
      {
        titulo: "Introdução ao Python",
        descricao: "Visão geral da linguagem, instalação e primeiro programa.",
        duracaoEstimada: 3,
        conteudos: [
          {
            titulo: "O que é Python e por que aprender",
            descricao:
              "História da linguagem, casos de uso (web, dados, automação) e vantagens para iniciantes.",
          },
          {
            titulo: "Instalação e configuração do ambiente",
            descricao:
              "Instalação do Python 3, configuração do VS Code e execução do clássico 'Olá, Mundo!'.",
          },
        ],
      },
      {
        titulo: "Fundamentos da Linguagem",
        descricao: "Variáveis, tipos de dados e operadores.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Variáveis e tipos de dados",
            descricao:
              "int, float, str, bool — declaração, atribuição e conversão de tipos.",
          },
          {
            titulo: "Operadores aritméticos e lógicos",
            descricao:
              "Operações matemáticas, comparações e operadores booleanos (and, or, not).",
          },
          {
            titulo: "Entrada e saída de dados",
            descricao:
              "Funções input() e print(), formatação de strings com f-strings.",
          },
        ],
      },
      {
        titulo: "Estruturas de Controle",
        descricao: "Condicionais e laços de repetição.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Condicionais: if, elif e else",
            descricao:
              "Tomada de decisão no código, operadores de comparação e aninhamento de condicionais.",
          },
          {
            titulo: "Laços: for e while",
            descricao:
              "Iteração sobre listas e intervalos, controle com break e continue.",
          },
        ],
      },
      {
        titulo: "Funções e Módulos",
        descricao: "Criação de funções reutilizáveis e importação de módulos.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "Definindo e chamando funções",
            descricao:
              "Sintaxe def, parâmetros, retorno de valores e escopo de variáveis.",
          },
          {
            titulo: "Módulos e bibliotecas padrão",
            descricao:
              "Importação com import e from, uso de math, random e datetime.",
          },
        ],
      },
      {
        titulo: "Projeto Final: Calculadora CLI",
        descricao:
          "Construção de uma calculadora de linha de comando aplicando todos os conceitos aprendidos.",
        duracaoEstimada: 3,
        conteudos: [
          {
            titulo: "Planejamento e estruturação do projeto",
            descricao:
              "Divisão em funções, menu interativo e validação de entrada do usuário.",
          },
          {
            titulo: "Implementação e testes manuais",
            descricao:
              "Codificação da calculadora e verificação dos casos de borda.",
          },
        ],
      },
    ],
  },

  {
    id: "python-intermediario",
    tecnologia: "Python",
    nome: "Python Intermediário",
    descricao:
      "Aprofunde seus conhecimentos em Python explorando estruturas de dados avançadas, orientação a objetos e manipulação de arquivos.",
    nivel: "intermediario",
    cargaHoraria: 30,
    modulos: [
      {
        titulo: "Estruturas de Dados",
        descricao: "Listas, tuplas, dicionários e conjuntos em profundidade.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "Listas e list comprehensions",
            descricao:
              "Slicing, métodos de lista e criação de listas com expressões compactas.",
          },
          {
            titulo: "Dicionários e conjuntos",
            descricao:
              "Manipulação de dicts, dict comprehensions e operações com sets.",
          },
          {
            titulo: "Tuplas e quando usá-las",
            descricao:
              "Imutabilidade, unpacking e uso como chaves de dicionário.",
          },
        ],
      },
      {
        titulo: "Orientação a Objetos",
        descricao: "Classes, herança e encapsulamento.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Classes e objetos",
            descricao:
              "Definição de classes, __init__, atributos de instância e métodos.",
          },
          {
            titulo: "Herança e polimorfismo",
            descricao:
              "Subclasses, override de métodos e uso de super().",
          },
          {
            titulo: "Métodos especiais (dunder methods)",
            descricao:
              "__str__, __repr__, __len__, __eq__ — tornando objetos mais pythônicos.",
          },
        ],
      },
      {
        titulo: "Manipulação de Arquivos",
        descricao: "Leitura, escrita e processamento de arquivos.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Leitura e escrita de arquivos de texto",
            descricao:
              "open(), context managers (with), modos r, w, a e encoding.",
          },
          {
            titulo: "Trabalhando com CSV e JSON",
            descricao:
              "Módulos csv e json para leitura e gravação de dados estruturados.",
          },
        ],
      },
      {
        titulo: "Tratamento de Erros",
        descricao: "Exceções e boas práticas de tratamento de erros.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "Try, except, finally",
            descricao:
              "Captura de exceções específicas, bloco finally e a cláusula else.",
          },
          {
            titulo: "Criando exceções customizadas",
            descricao:
              "Herança de Exception para criar erros semânticos ao domínio da aplicação.",
          },
        ],
      },
      {
        titulo: "Projeto: API de Tarefas",
        descricao:
          "Criação de um gerenciador de tarefas com persistência em JSON.",
        duracaoEstimada: 7,
        conteudos: [
          {
            titulo: "Modelagem com classes",
            descricao:
              "Classe Tarefa com status, prioridade e data de vencimento.",
          },
          {
            titulo: "Persistência em arquivo JSON",
            descricao:
              "Salvar e carregar tarefas do disco a cada execução.",
          },
        ],
      },
    ],
  },

  {
    id: "python-avancado",
    tecnologia: "Python",
    nome: "Python Avançado",
    descricao:
      "Domine os recursos avançados do Python: decoradores, generators, concorrência e boas práticas de produção.",
    nivel: "avancado",
    cargaHoraria: 40,
    modulos: [
      {
        titulo: "Programação Funcional",
        descricao: "Funções de alta ordem, lambda, map, filter e reduce.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "Funções lambda e closures",
            descricao:
              "Funções anônimas, escopo léxico e criação de fábricas de funções.",
          },
          {
            titulo: "map, filter e functools.reduce",
            descricao:
              "Transformação e filtragem de coleções sem loops explícitos.",
          },
        ],
      },
      {
        titulo: "Decoradores e Generators",
        descricao: "Metaprogramação e iteração eficiente com memória.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Decoradores: conceito e criação",
            descricao:
              "Wrappers de função, preservação de metadados com functools.wraps e decoradores com parâmetros.",
          },
          {
            titulo: "Generators e yield",
            descricao:
              "Iteradores lazy, expressões geradoras e casos de uso com grandes volumes de dados.",
          },
        ],
      },
      {
        titulo: "Concorrência e Paralelismo",
        descricao: "Threading, multiprocessing e asyncio.",
        duracaoEstimada: 10,
        conteudos: [
          {
            titulo: "Threading e o GIL",
            descricao:
              "Threads em Python, o Global Interpreter Lock e quando usar threading.",
          },
          {
            titulo: "asyncio e programação assíncrona",
            descricao:
              "Event loop, async/await, coroutines e aiohttp para I/O assíncrono.",
          },
          {
            titulo: "multiprocessing para tarefas CPU-bound",
            descricao:
              "Pool de processos, comunicação via Queue e comparação com threading.",
          },
        ],
      },
      {
        titulo: "Qualidade e Produção",
        descricao: "Testes, type hints e empacotamento.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Testes com pytest",
            descricao:
              "Fixtures, parametrize, mocks e cobertura de código com pytest-cov.",
          },
          {
            titulo: "Type hints e mypy",
            descricao:
              "Anotações de tipo, tipos genéricos e verificação estática com mypy.",
          },
          {
            titulo: "Empacotamento com pyproject.toml",
            descricao:
              "Criação de pacotes distribuíveis e publicação no PyPI.",
          },
        ],
      },
      {
        titulo: "Projeto: CLI de Análise de Dados",
        descricao:
          "Ferramenta de linha de comando que processa arquivos CSV e gera relatórios.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Leitura eficiente com generators",
            descricao:
              "Processar arquivos grandes linha a linha sem carregar tudo na memória.",
          },
          {
            titulo: "Relatório formatado no terminal",
            descricao:
              "Uso de rich ou tabulate para exibição elegante dos dados.",
          },
        ],
      },
    ],
  },
];

export const desafiosPython: Desafio[] = [
  {
    trilhaId: "python-iniciante",
    nivel: "iniciante",
    titulo: "Calculadora de IMC",
    enunciado:
      "Você foi contratado para desenvolver uma pequena ferramenta de saúde. Crie uma função chamada `calcular_imc` que recebe o peso (em kg) e a altura (em metros) de uma pessoa e retorna o valor do IMC calculado com duas casas decimais. Fórmula: IMC = peso / (altura ** 2).",
    objetivo:
      "Praticar declaração de funções, operadores aritméticos e formatação de números em Python.",
    requisitos: [
      "Criar uma função chamada exatamente `calcular_imc`",
      "A função deve aceitar dois parâmetros: peso (float) e altura (float)",
      "Retornar o IMC arredondado para duas casas decimais",
      "Não utilizar bibliotecas externas",
    ],
    criteriosConclusao: [
      "calcular_imc(70, 1.75) retorna 22.86",
      "calcular_imc(90, 1.60) retorna 35.16",
      "A função não imprime nada — apenas retorna o valor",
    ],
    exemplos: [
      { entrada: "calcular_imc(70, 1.75)", saida: "22.86" },
      { entrada: "calcular_imc(90, 1.60)", saida: "35.16" },
    ],
  },
  {
    trilhaId: "python-intermediario",
    nivel: "intermediario",
    titulo: "Inversão de dicionário",
    enunciado:
      "Em sistemas de cache e índices invertidos, é comum precisar inverter a relação chave-valor de um dicionário. Crie uma função `inverter_dicionario` que recebe um dicionário e retorna um novo dicionário com as chaves e valores trocados. Se dois valores originais forem iguais, mantenha apenas a última ocorrência (na ordem de iteração do dict).",
    objetivo:
      "Aplicar dict comprehensions, entender a iteração sobre dicionários e tratar colisões de chave.",
    requisitos: [
      "Criar uma função chamada `inverter_dicionario`",
      "Não modificar o dicionário original",
      "Retornar um novo dicionário com chaves e valores trocados",
      "Em caso de valores duplicados, preservar apenas a última ocorrência",
      "Resolver em no máximo duas linhas de código",
    ],
    criteriosConclusao: [
      "inverter_dicionario({'a': 1, 'b': 2}) retorna {1: 'a', 2: 'b'}",
      "inverter_dicionario({'x': 1, 'y': 1}) retorna {1: 'y'} (última ocorrência)",
      "O dicionário original permanece inalterado",
    ],
    exemplos: [
      {
        entrada: "inverter_dicionario({'a': 1, 'b': 2, 'c': 3})",
        saida: "{1: 'a', 2: 'b', 3: 'c'}",
      },
      {
        entrada: "inverter_dicionario({'x': 1, 'y': 1})",
        saida: "{1: 'y'}",
      },
    ],
  },
  {
    trilhaId: "python-avancado",
    nivel: "avancado",
    titulo: "Decorador de cache simples",
    enunciado:
      "Implemente do zero um decorador chamado `cache` que memoriza os resultados de uma função para evitar recalcular com os mesmos argumentos. Este é o comportamento central do `functools.lru_cache`, mas você deve implementá-lo manualmente usando closures e dicionários. O decorador deve ser transparente: a função decorada deve se comportar normalmente para quem a chama.",
    objetivo:
      "Dominar decoradores com estado interno, closures, e o padrão de memoização — recursos centrais de Python avançado.",
    requisitos: [
      "Implementar o decorador `cache` sem usar functools.lru_cache ou similares",
      "Usar um dicionário interno para armazenar resultados já calculados",
      "A chave do cache deve ser construída a partir dos argumentos da função",
      "Preservar o nome e a docstring da função original com functools.wraps",
      "Funcionar com qualquer função que receba argumentos hashable",
    ],
    criteriosConclusao: [
      "fatorial(5) é calculado apenas uma vez; chamadas subsequentes retornam do cache",
      "O nome da função decorada permanece o mesmo (não vira 'wrapper')",
      "O decorador funciona com funções que recebem múltiplos argumentos",
    ],
    exemplos: [
      {
        entrada:
          "@cache\ndef fatorial(n):\n    return 1 if n == 0 else n * fatorial(n-1)\n\nfatorial(5)  # calcula\nfatorial(5)  # do cache",
        saida: "120",
      },
    ],
  },
];
