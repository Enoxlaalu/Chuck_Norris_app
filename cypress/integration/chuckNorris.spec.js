const { cy, assert } = window;

describe('Chuck Norris app tests', () => {
    it('opens the app page', () => {
        cy.visit('http://localhost:8080/');
        cy.get('.jokesWrapper h2')
            .should('exist');

        cy.intercept('/categories').as('categories');
        cy.intercept('/random').as('random');

        cy.wait('@categories').then(res => {
            assert.isNotNull(res.response.body);
        });
        cy.wait('@random').then(res => {
            assert.isNotNull(res.response.body);
        });
    });
    it('applies search correctly', () => {
        cy.get('.searchWrapper input')
            .type('fake')
            .should('have.value', 'fake');
        cy.get('.searchWrapper button')
            .click();
        cy.get('.jokesList li')
            .should('have.length', 3);
        cy.get('.jokesWrapper h2')
            .should('not.exist');
    });
    it('clears input value', () => {
        cy.get('.searchWrapper .cross').click();
        cy.get('.searchWrapper input')
            .should('have.value', '');
        cy.get('.jokesWrapper h2')
            .should('exist');
    });
    it('sets active category', () => {
        cy.get('.categoriesPanel li:last-of-type')
            .should('contain', 'travel')
            .click();
        cy.get('.jokesWrapper h2')
            .should('exist')
            .should('contain', 'TRAVEL');
    });
    it('resets active category on search', () => {
        cy.intercept('/search').as('search');

        cy.get('.searchWrapper input')
            .type('joke')
            .should('have.value', 'joke');
        cy.get('.searchWrapper button')
            .click();

        cy.wait('@search');

        cy.get('.categoriesPanel li:first-of-type')
            .should('have.class', 'active');
        cy.get('.searchWrapper .cross').click();
    });
    it('shows warning if input value length < 3', () => {
        cy.get('.searchWrapper input')
            .type('wa')
            .should('have.value', 'wa');
        cy.get('.searchWrapper button')
            .click();
        cy.get('.warning')
            .should('exist')
            .should('contain', 'more than 3');
    });
    it('hides warning after clicking on category', () => {
        cy.get('.warning')
            .should('exist');
        cy.get('.categoriesPanel li:nth-of-type(3)')
            .should('contain', 'career')
            .click();
        cy.get('.jokesWrapper h2')
            .should('exist')
            .should('contain', 'CAREER');
    });
    it('clears search result and input value on category click', () => {
        cy.intercept('/search').as('search');

        cy.get('.searchWrapper input')
            .type('allow')
            .should('have.value', 'allow');
        cy.get('.searchWrapper button')
            .click();

        cy.wait('@search');

        cy.get('.jokesList li')
            .should('have.length', 64);

        cy.get('.categoriesPanel li:last-of-type')
            .should('contain', 'travel')
            .click();
        cy.get('.jokesWrapper h2')
            .should('exist')
            .should('contain', 'TRAVEL');
        cy.get('.searchWrapper input')
            .should('have.value', '');
    });
    it('opens category panel from mobile view', () => {
        cy.viewport(520, 768);
        cy.get('.categoriesPanel')
            .should('not.have.class', 'opened')
            .should('have.css', 'position', 'absolute');
        cy.get('.hamburger')
            .should('exist')
            .click();
        cy.get('.categoriesPanel')
            .should('have.class', 'opened');
    });
    it('hides category panel when choosing a category on mobile view', () => {
        cy.viewport(520, 768);
        cy.get('.categoriesPanel li:nth-of-type(2)')
            .should('contain', 'animal')
            .click();
        cy.get('.jokesWrapper h2')
            .should('exist')
            .should('contain', 'ANIMAL');
        cy.get('.categoriesPanel')
            .should('not.have.class', 'opened');
    });
});