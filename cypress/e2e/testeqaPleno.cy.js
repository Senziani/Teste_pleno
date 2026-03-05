/// <reference types="cypress" />

import "dotenv/config";
import data from "../support/data.cy.js";

const url = Cypress.env("URL_LOGIN");
const user = Cypress.env("USER_NAME");
const pass = Cypress.env("USER_PASS");

describe("Teste QA Pleno", () => {
  beforeEach(() => {
    cy.visit(url);
    cy.url().should("include", "https://qualeagiria.com.br/");
    cy.visit(url + "/inserir");

    // forçar para digitar pois o imput esta imcoberto por um elemento
    cy.get(data.Inputemail)
      .scrollIntoView()
      .should("be.visible")
      .type(user, { force: true });
    cy.get(data.Inputsenha)
      .scrollIntoView()
      .should("be.visible")
      .type(pass, { force: true });
  });

  it("Teste Pagina - Novas Girías", () => {
    cy.get(data.BtnGirias).click();
    cy.url().should("include", "https://qualeagiria.com.br/novas");
    cy.contains("h1", "Novas Gírias").should("be.visible");

    cy.visit(data.BtnLermais);
    cy.contains("h2", "BuBu").should("be.visible");
    cy.get(data.Btnlike).click();
    cy.get(data.BtnDeslike).click();
    cy.get(data.BtnNeutro).click();

    cy.visit(url + "/novas");
    cy.visit(url + "/inserir");
    cy.contains("h1", "Entrar com sua conta").should("be.visible");

    cy.visit(url + "/novas");
  });
});
