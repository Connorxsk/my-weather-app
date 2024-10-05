import App from "../../src/App";

describe("<SearchBar />", () => {
  it("displays search bar and checks if it works", () => {
    cy.viewport(900, 500);
    cy.mount(<App />);
    cy.wait(2000); //有时候第一次加载超时，只能等加载完重复测
    cy.get('[data-testid="searchBar"]').should("be.visible");
    cy.get('[data-testid="weatherCard"]').should("be.visible");
    cy.get('[data-testid="searchBar"] input').type("Guangzhou{enter}"); //输入city后可以直接按回车键
    cy.get('[data-testid="weatherCard"]').contains("Guangzhou");
    cy.get('[data-testid="searchBar"] input').clear().type("Beijing");
    cy.get('[data-testid="searchBar"] button').click();
    cy.get('[data-testid="weatherCard"]').contains("Beijing");
  });
});
