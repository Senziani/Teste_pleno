/// <reference types="cypress" />

import "dotenv/config";

const url = Cypress.env("URL_LOGIN");
const username = Cypress.env("USERNAME");
const password = Cypress.env("PASSWORD");

describe("Teste QA Pleno", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.url().should("include", "https://qualeagiria.com.br/");
  });

  it("Teste Pagina - Novas Girías", () => {
    cy.get('[data-svelte-h="svelte-3kozdy"] > .svelte-1nzezmm').click();
    cy.url().should("include", "https://qualeagiria.com.br/novas");
    cy.contains("h1", "Novas Gírias").should("be.visible");
  });
});
