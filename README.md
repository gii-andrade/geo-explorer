# 🗺️ Geo-Explorer

Aplicação de exploração de trilhas de aprendizagem desenvolvida como projeto de portfólio para a [DIO](https://www.dio.me/).

## Sobre o projeto

O Geo-Explorer permite que você:

- 📚 **Consulte trilhas de aprendizagem** por tecnologia e nível
- 💡 **Receba desafios de código** compatíveis com a tecnologia e nível escolhidos
- 🏆 **Gere certificados fictícios** para trilhas concluídas
- 🔌 **Integre com ferramentas de IA** via servidor MCP (Claude Desktop, VS Code, etc.)

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/) — linguagem principal
- [Node.js](https://nodejs.org/) ≥ 20 — runtime
- [Vitest](https://vitest.dev/) — testes automatizados (73 testes)
- [MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk) — protocolo de integração com IA

## Pré-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/geo-explorer.git
cd geo-explorer

# Instale as dependências
npm install

# Compile o projeto
npm run build
```

## Uso (CLI)

### Trilha de aprendizagem

```bash
node dist/index.js trilha Python iniciante
node dist/index.js trilha JavaScript intermediario
node dist/index.js trilha Java avancado
node dist/index.js trilha SQL iniciante
```

### Desafio de programação

```bash
node dist/index.js desafio Python iniciante
node dist/index.js desafio JavaScript intermediario
node dist/index.js desafio SQL avancado
```

### Certificado fictício

```bash
node dist/index.js certificado "Ana Silva" Python iniciante
node dist/index.js certificado "Carlos Mendes" SQL avancado
node dist/index.js certificado "Beatriz Costa" JavaScript intermediario
```

**Níveis disponíveis:** `iniciante` | `intermediario` | `avancado`

**Tecnologias disponíveis:** `Python` | `JavaScript` | `Java` | `SQL`

## Testes

```bash
# Executar os testes uma vez
npm test

# Executar os testes em modo watch
npm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
```

## Servidor MCP

O Geo-Explorer expõe suas funcionalidades via [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), permitindo que assistentes de IA como o Claude Desktop as utilizem diretamente.

### Ferramentas expostas

| Ferramenta | Descrição |
|---|---|
| `buscar_trilha` | Retorna a trilha de aprendizagem para uma tecnologia e nível |
| `buscar_desafio` | Retorna um desafio de código para uma tecnologia e nível |
| `gerar_certificado` | Gera um certificado fictício de conclusão |

### Iniciando o servidor

```bash
npm run build
npm run mcp:start
```

### Testando com o MCP Inspector

```bash
npm run build
npm run mcp:inspect
```

### Configurando no Claude Desktop

Edite `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) ou `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "geo-explorer": {
      "command": "node",
      "args": ["/caminho/absoluto/para/geo-explorer/dist/mcp/server.js"]
    }
  }
}
```

Reinicie o Claude Desktop. O assistente passará a ter acesso às trilhas, desafios e certificados do Geo-Explorer.

## Estrutura do projeto

```
geo-explorer/
├── src/
│   ├── commands/       # Lógica dos comandos (trilha, desafio, certificado)
│   ├── data/           # Base de dados fictícia por tecnologia
│   ├── mcp/            # Servidor MCP (adaptador puro, sem lógica de negócio)
│   ├── types/          # Interfaces e tipos TypeScript
│   ├── utils/          # Utilitários compartilhados (formatação de texto)
│   └── index.ts        # Ponto de entrada da CLI
├── tests/              # Testes automatizados (73 testes, 0 falhas)
├── package.json
└── tsconfig.json
```

## Status do projeto

✅ **Concluído**

| Fase | Descrição | Status |
|------|-----------|--------|
| 1 | Estrutura inicial | ✅ Concluída |
| 2 | Dados fictícios e comandos | ✅ Concluída |
| 3 | Testes automatizados | ✅ Concluída |
| 4 | CLI interativa | ✅ Concluída |
| 5 | Servidor MCP | ✅ Concluída |
| 6 | Documentação e revisão técnica | ✅ Concluída |

## Licença

MIT
