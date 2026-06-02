# dellano-portfolio

O **dellano-portfolio** é um site que reúne todos os projetos que desenvolvi até aqui. Foi uma excelente oportunidade para aplicar conhecimentos de desenvolvimento front-end com tecnologias modernas como **Next.js**, **React**, **TypeScript** e **Tailwind CSS**.

Este repositório contém o código-fonte do site [dellano-portfolio](https://dellano-portfolio.com.br/).

**Conteúdo**

- [Instalar e rodar o projeto](#instalar-e-rodar-o-projeto)
  - [Dependências globais](#dependências-globais)
  - [Dependências locais](#dependências-locais)
  - [Rodar o projeto](#rodar-o-projeto)
  - [Build para produção](#build-para-produção)
- [Verificar código com ESLint](#verificar-código-com-eslint)

## Instalar e rodar o projeto

Rodar a aplicação em sua máquina local é uma tarefa bastante simples.

### Dependências globais

Você precisa ter instalado:

- **Node.js LTS v22** (ou qualquer versão superior)

```bash
node -v
```

### Dependências locais

Com o repositório clonado, você pode instalar as dependências locais do projeto:

```bash
npm install
```

### Rodar o projeto

Para rodar o projeto localmente em modo de desenvolvimento, execute:

```bash
npm run dev
```

A aplicação será exposada no seguinte endereço:

```
http://localhost:3000/
```

Observações:

- Para derrubar o serviço, basta utilizar as teclas `CTRL+C`, que é o padrão dos terminais para finalizar processos.
- O modo desenvolvimento inclui hot reload, facilitando o desenvolvimento.

### Build para produção

Para fazer build da aplicação para produção:

```bash
npm run build
```

E para iniciar o servidor de produção:

```bash
npm start
```

## Verificar código com ESLint

Para verificar o código com ESLint:

```bash
npm run lint
```
