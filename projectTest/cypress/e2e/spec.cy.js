/// <reference types = "cypress" />

describe("my example", () => {
  it("cardTask", () => {
    cy.visit("http://127.0.0.1:5500/Main/indeex.html");
    cy.get('[data-testid="toCard"]').click();
    cy.location("pathname").should("equal", "/dist/index.html");
  });
  it("cardFillIn", () => {
    cy.visit("http://127.0.0.1:5500//dist/index.html");
    cy.get('[id="cardNumber"]').type("5541054199887756");
    cy.get('[id="cardName"]').type("NAREK HAKOBYAN");
    cy.get('[id="cardMonth"]').select("02");
    cy.get('[id="cardYear"]').select("2025");
    cy.get('[id="cardCvv"]').type("959");
  });
  it("sendEMail", () => {
    cy.visit("http://127.0.0.1:5500/dist1/index.html");
    cy.get('[type="email"]').type(
      `narek_${Math.floor(Math.random() * 100)}@gmail.com`
    );
    cy.get('[type="text"]').type("Send email to GeamTeam");
    cy.get('[placeholder="Body"]').type("Dear GymTeam i sent you my CV");
    cy.contains("Send mail").click();
  });
});
