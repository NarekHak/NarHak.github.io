/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  // Log the error to the console (optional)
  console.error("Uncaught exception:", err);

  // Prevent Cypress from failing the test
  return false;
});
// Add a custom Cypress command for login
Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://shop.ccs.com/account/login?return_url=%2Faccount");
  cy.get('[data-testid="FLYOUT"]', { timeout: 10000 }).should("be.visible");
  cy.get('[data-testid="FLYOUT"]', { timeout: 10000 })
    .contains("Close dialog 3")
    .click();
  cy.get("#CustomerEmail").type(email);
  cy.get("#CustomerPassword").type(password);
  cy.get('input[type="submit"].button.w-100.mv3').first().click();
  // You may want to add assertions for successful login here
});

describe("adidas cypress", () => {
  it("login and search", () => {
    // Use the custom login command
    cy.login("marketingderjava@gmail.com", "n1a9r9e7k");

    const baseUrl = "https://shop.ccs.com";

    // Click on the logo
    cy.wait(5000);
    cy.get(
      ".flex.flex-grow-1.flex-1-l.flex-column.justify-center.mra a.header__logo"
    ).click();

    cy.get(
      ".nav__tools--search-mobile.ph2.h-100.bn.pointer.tc.animate.left-0.top-0",
      { timeout: 5000 }
    ).type("Nike");

    // Press Enter to submit the search
    cy.get("#Search-header").type("Nike");

    cy.contains(
      'a.link.db.black.brand-medium.brighten.animate.lh-copy.pv1-l.pv2.ph3.ph0-l[tabindex="1"]',
      "Nike SB"
    ).click();
    cy.wait(5000);
    cy.get(
      "#nike-sb-nyjah-3-premium-shoes-black-white-deep-royal-white-link"
    ).click();

    cy.contains("span", "8.0").should("be.visible").click();
    cy.get("#AddToCart").click();
    cy.get(
      ".bg-transparent.pointer.black.bn.pa2.flex.items-center.justify-center.mha.currentColor"
    ).click();
    cy.scrollTo("top");
    cy.get(".feather.feather-shopping-cart").click();
    cy.contains("button", "Checkout").should("be.visible").click();

    cy.get("#checkout_shipping_address_address1")
      .should("be.visible") // optional: ensure the element is visible
      .type("950 Ridge RD C25");
    cy.get("#checkout_shipping_address_zip").should("be.visible").type("19720");
    cy.get("#checkout_shipping_address_city")
      .should("be.visible")
      .type("New Castle");
    cy.get("#checkout_shipping_address_phone")
      .should("be.visible")
      .type("13024148567");
    cy.get("#checkout_buyer_accepts_sms").should("be.visible").click();
    cy.get("#continue_button").should("be.visible").click();
    cy.get("#continue_button").should("be.visible").click();
    cy.wait(5000);
  });
});
