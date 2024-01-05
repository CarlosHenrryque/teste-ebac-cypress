/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Fucnionaldiade Endereços - Faturamento e Entrego', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        });

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Carlos', 'Sousa', 'PD', 'Planaltina-DF', 15, 'Brasília', 'Distrito Federal', 73402099, 11993869060, 'kaikeebac@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});