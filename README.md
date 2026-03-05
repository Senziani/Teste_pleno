# Teste Técnico QA Pleno

Automação de testes desenvolvida como parte do **processo seletivo para vaga de QA Pleno**.

## 👨‍💻 Autor

**Rafael Senziani**

## 📂 Repositório

https://github.com/Senziani/Teste_pleno

Branch utilizada: **master**

---

# 🎯 Objetivo

O objetivo deste projeto é validar funcionalidades da aplicação através de **testes automatizados**, além de identificar possíveis problemas de:

* Usabilidade
* Funcionalidade
* Experiência do usuário
* Validações de front-end

---

# 🧪 Tecnologias Utilizadas

* **Cypress**
* **JavaScript**
* **Node.js**
* **VS Code**

---

# 📁 Estrutura do Projeto

```
Teste_pleno
│
├── cypress
│   ├── e2e
│   │   └── ttesteqaPleno.cy.cy.js
│   │
│   ├── fixtures
│   │
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
|   |   └── data.cy.js
│
├── cypress.config.js
├── .gitignore
├── Cypress.env.js
│
├── package.json
│
└── README.md
```

### Descrição das Pastas

**cypress/e2e**
Contém os arquivos de testes automatizados.

**cypress/fixtures**
Arquivos de dados mockados para testes.

**cypress/support**
Configurações globais e comandos customizados do Cypress.

**cypress.config.js**
Arquivo de configuração do Cypress.

**package.json**
Gerenciamento de dependências do projeto.

---

# ⚙️ Instalação do Projeto

Clone o repositório:

```bash
git clone https://github.com/Senziani/Teste_pleno.git
```

Entre na pasta:

```bash
cd Teste_pleno
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando os Testes

Abrir o Cypress:

```bash
npx cypress open
```

Executar em modo headless:

```bash
npx cypress run
```

---

# 🧩 Cenários Automatizados

Os testes automatizados cobrem validações como:

* Acesso ao site
* Validação de rotas
* Interações com elementos da página
* Validação de funcionalidades principais

---

# 📄 Relatório de Análise

Além da automação, foi desenvolvido um **relatório de análise de QA** contendo:

* Problemas encontrados
* Sugestões de melhoria
* Testes recomendados

---

# 🚀 Melhorias Futuras

Possíveis evoluções do projeto:

* Implementação de **Page Object Model**
* Integração com **CI/CD**
* Relatórios automatizados de testes
* Testes de API
* Testes de regressão

---

# 📬 Contato

Caso queira entrar em contato:

**Rafael Senziani**
