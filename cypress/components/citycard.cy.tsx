import CityCard from "../../src/components/CityCard";

describe("<CityCard />", () => {
  it("displays city cards", () => {
    cy.viewport(900, 500);
    const mockSetSearchValue = cy.stub();

    cy.mount(<CityCard setSearchValue={mockSetSearchValue} />);

    cy.wait(2000);

    cy.get('[data-testid="cityCard"] .city-card').should("have.length", 4);

    cy.contains("Sydney").should("be.visible");
    cy.contains("Shanghai").should("be.visible");
    cy.contains("NewYork").should("be.visible");
    cy.contains("London").should("be.visible");

    cy.get('[data-testid="cityCard"] .city-card').contains("~");
  });
});
