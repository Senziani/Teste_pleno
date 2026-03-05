/// <reference types="cypress" />

import "dotenv/config";
import data from "../support/data.cy.js";

const url = Cypress.env("URL_LOGIN");

describe("Teste QA Pleno", () => {
  beforeEach(() => {
    cy.login(data.Inputemail, data.Inputsenha);

    cy.visit(url);
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

    cy.get(data.BtnAddGirias).click({ force: true });
    cy.contains("h1", "Adicionar Gíria").should("be.visible");

    //cy.visit(url + "/novas");
  });
});
