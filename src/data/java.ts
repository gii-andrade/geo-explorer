/**
 * Trilhas e desafios de Java.
 * Cada trilha cobre um nível: iniciante, intermediario, avancado.
 */

import type { Trilha, Desafio } from "../types/index.js";

export const trilhasJava: Trilha[] = [
  {
    id: "java-iniciante",
    tecnologia: "Java",
    nome: "Java para Iniciantes",
    descricao:
      "Comece sua jornada em Java aprendendo a sintaxe da linguagem, tipos de dados, controle de fluxo e criação das primeiras classes.",
    nivel: "iniciante",
    cargaHoraria: 22,
    modulos: [
      {
        titulo: "Introdução ao Java",
        descricao: "Ecossistema Java, JDK, JVM e primeiro programa.",
        duracaoEstimada: 3,
        conteudos: [
          {
            titulo: "O que é Java e o ecossistema JVM",
            descricao:
              "Diferença entre JDK, JRE e JVM, compilação (.java → .class) e portabilidade.",
          },
          {
            titulo: "Configuração do ambiente e Hello World",
            descricao:
              "Instalação do JDK 17, configuração do VS Code e execução do primeiro programa.",
          },
        ],
      },
      {
        titulo: "Tipos e Operadores",
        descricao: "Tipos primitivos, variáveis e operadores.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Tipos primitivos e wrappers",
            descricao:
              "int, double, boolean, char e seus correspondentes Integer, Double, Boolean.",
          },
          {
            titulo: "Operadores e expressões",
            descricao:
              "Operadores aritméticos, relacionais, lógicos e o operador ternário.",
          },
          {
            titulo: "Strings em Java",
            descricao:
              "Imutabilidade, principais métodos de String e StringBuilder.",
          },
        ],
      },
      {
        titulo: "Controle de Fluxo",
        descricao: "Condicionais e laços em Java.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "if/else e switch",
            descricao:
              "Estruturas condicionais tradicionais e o switch expression do Java 14+.",
          },
          {
            titulo: "for, while e do-while",
            descricao:
              "Laços de repetição, for-each para coleções e controle com break/continue.",
          },
        ],
      },
      {
        titulo: "Arrays e Métodos",
        descricao: "Arrays unidimensionais e criação de métodos.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Arrays: declaração e manipulação",
            descricao:
              "Criação, acesso por índice, percurso com for e arrays multidimensionais.",
          },
          {
            titulo: "Métodos estáticos",
            descricao:
              "Declaração, parâmetros, retorno, sobrecarga e o modificador static.",
          },
        ],
      },
      {
        titulo: "Projeto: Jogo de Adivinhação",
        descricao:
          "Jogo de adivinhar um número entre 1 e 100 usando Random e controle de fluxo.",
        duracaoEstimada: 4,
        conteudos: [
          {
            titulo: "Lógica do jogo com while e Scanner",
            descricao:
              "Captura de entrada do usuário com Scanner e lógica de comparação.",
          },
          {
            titulo: "Contagem de tentativas e encerramento",
            descricao:
              "Registro de tentativas e exibição de mensagem de vitória/derrota.",
          },
        ],
      },
    ],
  },

  {
    id: "java-intermediario",
    tecnologia: "Java",
    nome: "Java Intermediário: Orientação a Objetos",
    descricao:
      "Aprofunde-se na orientação a objetos com Java: classes, herança, interfaces, coleções e tratamento de exceções.",
    nivel: "intermediario",
    cargaHoraria: 32,
    modulos: [
      {
        titulo: "Orientação a Objetos",
        descricao: "Pilares do OO: encapsulamento, herança e polimorfismo.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "Classes, atributos e construtores",
            descricao:
              "Modelagem de objetos do mundo real, getters/setters e construtores customizados.",
          },
          {
            titulo: "Herança e a palavra-chave extends",
            descricao:
              "Reutilização de código, override de métodos e a cadeia de herança.",
          },
          {
            titulo: "Interfaces e classes abstratas",
            descricao:
              "Contrato vs. implementação parcial, implementação de múltiplas interfaces.",
          },
          {
            titulo: "Polimorfismo na prática",
            descricao:
              "Variável do tipo pai apontando para filho, casting e instanceof.",
          },
        ],
      },
      {
        titulo: "Collections Framework",
        descricao: "List, Set, Map e boas práticas de uso.",
        duracaoEstimada: 8,
        conteudos: [
          {
            titulo: "List: ArrayList e LinkedList",
            descricao:
              "Diferenças de performance, principais métodos e quando usar cada uma.",
          },
          {
            titulo: "Set: HashSet e TreeSet",
            descricao:
              "Unicidade de elementos, ordenação natural e uso de Comparable.",
          },
          {
            titulo: "Map: HashMap e LinkedHashMap",
            descricao:
              "Pares chave-valor, iteração e escolha da implementação correta.",
          },
        ],
      },
      {
        titulo: "Exceções",
        descricao: "Hierarquia de exceções e boas práticas.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Checked vs. Unchecked Exceptions",
            descricao:
              "Diferença entre Exception e RuntimeException, try-catch-finally.",
          },
          {
            titulo: "Criando exceções de domínio",
            descricao:
              "Subclasses de RuntimeException para representar erros de negócio.",
          },
        ],
      },
      {
        titulo: "Generics e Enums",
        descricao: "Tipagem genérica e constantes tipadas.",
        duracaoEstimada: 5,
        conteudos: [
          {
            titulo: "Generics: classes e métodos genéricos",
            descricao:
              "Wildcard <?>, bounded types (<T extends Comparable>) e type erasure.",
          },
          {
            titulo: "Enums com atributos e métodos",
            descricao:
              "Enums além de constantes: construtores, campos e métodos de instância.",
          },
        ],
      },
      {
        titulo: "Projeto: Sistema de Biblioteca",
        descricao:
          "Sistema simples de gerenciamento de livros e empréstimos usando OO e coleções.",
        duracaoEstimada: 6,
        conteudos: [
          {
            titulo: "Modelagem das entidades",
            descricao:
              "Classes Livro, Usuario e Emprestimo com relacionamentos adequados.",
          },
          {
            titulo: "Operações CRUD em memória",
            descricao:
              "Cadastro, consulta, atualização e remoção usando ArrayList e HashMap.",
          },
        ],
      },
    ],
  },

  {
    id: "java-avancado",
    tecnologia: "Java",
    nome: "Java Avançado: Streams, Concorrência e Spring",
    descricao:
      "Domine os recursos modernos do Java: Stream API, Optional, programação concorrente e introdução ao Spring Boot.",
    nivel: "avancado",
    cargaHoraria: 45,
    modulos: [
      {
        titulo: "Java Moderno (8+)",
        descricao: "Lambdas, Stream API e Optional.",
        duracaoEstimada: 10,
        conteudos: [
          {
            titulo: "Lambdas e interfaces funcionais",
            descricao:
              "Function, Consumer, Predicate, Supplier e referências a métodos (::).",
          },
          {
            titulo: "Stream API",
            descricao:
              "Operações intermediárias (filter, map, sorted) e terminais (collect, reduce, findFirst).",
          },
          {
            titulo: "Optional<T>",
            descricao:
              "Eliminação de NullPointerException com Optional, map, flatMap e orElseGet.",
          },
        ],
      },
      {
        titulo: "Concorrência",
        descricao: "Threads, ExecutorService e CompletableFuture.",
        duracaoEstimada: 10,
        conteudos: [
          {
            titulo: "Threads e Runnable",
            descricao:
              "Ciclo de vida, sincronização com synchronized e problemas de concorrência.",
          },
          {
            titulo: "ExecutorService e thread pools",
            descricao:
              "Gerenciamento de threads com Executors, Future e Callable.",
          },
          {
            titulo: "CompletableFuture",
            descricao:
              "Composição assíncrona com thenApply, thenCompose e exceptionally.",
          },
        ],
      },
      {
        titulo: "Spring Boot Essencial",
        descricao: "Introdução ao framework Spring Boot para APIs REST.",
        duracaoEstimada: 15,
        conteudos: [
          {
            titulo: "Injeção de dependência e IoC",
            descricao:
              "Container Spring, @Component, @Service, @Repository e @Autowired.",
          },
          {
            titulo: "Criando uma API REST",
            descricao:
              "@RestController, @GetMapping, @PostMapping, ResponseEntity e DTOs.",
          },
          {
            titulo: "Persistência com Spring Data JPA",
            descricao:
              "@Entity, JpaRepository e query methods sem escrever SQL.",
          },
        ],
      },
      {
        titulo: "Projeto: API de Pedidos",
        descricao:
          "API REST completa de pedidos com Spring Boot, JPA e tratamento de erros.",
        duracaoEstimada: 10,
        conteudos: [
          {
            titulo: "Modelagem e camadas da aplicação",
            descricao:
              "Controller → Service → Repository, DTOs e mapeamento de entidades.",
          },
          {
            titulo: "Validação e tratamento global de erros",
            descricao:
              "Bean Validation (@NotNull, @Size) e @ControllerAdvice para respostas de erro padronizadas.",
          },
        ],
      },
    ],
  },
];

export const desafiosJava: Desafio[] = [
  {
    trilhaId: "java-iniciante",
    nivel: "iniciante",
    titulo: "Verificador de número primo",
    enunciado:
      "Você está construindo uma calculadora matemática educacional. Implemente um método estático `isPrimo(int n)` que determina se um número inteiro é primo. Um número primo é divisível apenas por 1 e por ele mesmo. Números menores ou iguais a 1 não são considerados primos.",
    objetivo:
      "Praticar a criação de métodos estáticos, laços de repetição e lógica condicional em Java.",
    requisitos: [
      "Criar um método estático com assinatura `public static boolean isPrimo(int n)`",
      "Retornar false para n <= 1",
      "Usar um laço para verificar divisores até a raiz quadrada de n",
      "Não usar bibliotecas externas ou BigInteger",
    ],
    criteriosConclusao: [
      "isPrimo(7) retorna true",
      "isPrimo(9) retorna false (divisível por 3)",
      "isPrimo(1) retorna false",
      "isPrimo(2) retorna true (menor primo)",
    ],
    exemplos: [
      { entrada: "isPrimo(7)", saida: "true" },
      { entrada: "isPrimo(9)", saida: "false" },
      { entrada: "isPrimo(1)", saida: "false" },
    ],
  },
  {
    trilhaId: "java-intermediario",
    nivel: "intermediario",
    titulo: "Agrupamento de palavras por comprimento com Stream API",
    enunciado:
      "Dado um conjunto de palavras, agrupe-as pelo seu comprimento usando a Stream API do Java. O resultado deve ser um `Map<Integer, List<String>>` onde a chave é o número de letras e o valor é a lista de palavras com aquele comprimento. A solução deve ser escrita em uma única expressão de stream encadeado.",
    objetivo:
      "Dominar o uso de Collectors.groupingBy com Stream API, combinando operações intermediárias e terminais.",
    requisitos: [
      "Usar stream() com Collectors.groupingBy",
      "O resultado deve ser Map<Integer, List<String>>",
      "Não usar laços explícitos (for, while)",
      "Implementar como método estático recebendo List<String>",
    ],
    criteriosConclusao: [
      'agruparPorComprimento(List.of(\"java\", \"go\", \"python\", \"c\")) retorna {1=[c], 2=[go], 4=[java], 6=[python]}',
      "Palavras com mesmo comprimento ficam na mesma lista",
      "A ordem dentro de cada lista preserva a ordem original",
    ],
    exemplos: [
      {
        entrada: '["java", "go", "python", "c", "rust"]',
        saida: "{1=[c], 2=[go], 4=[java, rust], 6=[python]}",
      },
    ],
  },
  {
    trilhaId: "java-avancado",
    nivel: "avancado",
    titulo: "Pipeline assíncrono com CompletableFuture",
    enunciado:
      "Simule um pipeline de processamento assíncrono típico de sistemas distribuídos. Implemente o método `buscarEProcessar(String recurso)` que: (1) busca dados de forma assíncrona usando CompletableFuture.supplyAsync, (2) transforma o resultado em maiúsculas com thenApply, (3) registra uma mensagem de erro no System.err em caso de falha com exceptionally, e (4) retorna o CompletableFuture<String> para que o chamador possa encadear mais operações.",
    objetivo:
      "Aplicar programação assíncrona com CompletableFuture em um pipeline realista com tratamento de erros.",
    requisitos: [
      "Usar CompletableFuture.supplyAsync para simular a busca",
      "Encadear thenApply para transformação do resultado",
      "Usar exceptionally para tratamento de falhas sem quebrar o pipeline",
      "O método deve retornar CompletableFuture<String>, não bloquear com .get()",
      "Não usar Thread.sleep ou mecanismos de bloqueio",
    ],
    criteriosConclusao: [
      "buscarEProcessar(\"api/dados\").get() retorna \"DADOS RETORNADOS\"",
      "Em caso de erro, o future completa com uma mensagem de fallback em vez de lançar exceção",
      "O método não bloqueia a thread chamadora",
    ],
    exemplos: [
      {
        entrada: 'buscarEProcessar("api/dados").get()',
        saida: '"DADOS RETORNADOS"',
      },
    ],
  },
];
