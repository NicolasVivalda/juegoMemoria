/// <reference types="Cypress" />

//recuerden correr http-server primero!
const URL = '127.0.0.1:8080';
const NUMERO_CUADROS = 12;

context('test juego', () => {

  before(() => {
    cy.visit(URL);
  });

  it('se asegura que haya un tablero con todos los cuadros', () => {
    cy.get('#tablero').find('.col').should('have.length', NUMERO_CUADROS);
  });

});
