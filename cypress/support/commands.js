// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const url = Cypress.env("URL_LOGIN");
const user = Cypress.env("USER_NAME");
const pass = Cypress.env("USER_PASS");

import data from "../support/data.cy.js";

Cypress.Commands.add("login", (email, password) => {
  cy.visit(url);
  cy.url().should("include", "https://qualeagiria.com.br/");
  cy.get(data.BtnIserir).click({ foce: true });

  // forçar para digitar pois o imput esta imcoberto por um elemento
  cy.get(email)
    .scrollIntoView()
    .should("be.visible")
    .type(user, { force: true });
  cy.get(password)
    .scrollIntoView()
    .should("be.visible")
    .type(pass, { force: true });
  cy.get(data.Btnlogin).click({ force: true });
});
