import 'cypress-file-upload';
import {uploadFile, checkUploadStatusAndClose} from '../support/utils'

describe('Data Upload Functionality', () => {
  beforeEach(() => {
    cy.visit('http://af8d2bdc267e54e139a6ccc817f0a8f6-1149838503.ap-southeast-1.elb.amazonaws.com:8080/betterdata/signin');
    cy.get('[placeholder="Enter email"]').type('sitarra.shafiq+1@gmail.com');
    cy.get('#password').type('C0mplexpass@');
    cy.get('[type="submit"]').contains("Sign In").click();
    cy.wait(3000);
    cy.get(".chakra-text").contains("Data Warehouse").click();
    cy.get('[type="button"]').contains("Add data source").click();
    cy.get('label[for="own"]').click();
  });

  it('uploads a valid file', () => {
    uploadFile('Sample-Spreadsheet-10-rows.csv');
    cy.contains('Sample-Spreadsheet-10-rows.csv').should('be.visible');
    cy.get('button').contains('Next').click();

    cy.get('input[name="dataSourceName"]').should('have.value', 'Sample-Spreadsheet-10-rows.csv');
    cy.get('[type="submit"]').contains("Add new Data Source").click();
    cy.wait(300);

    checkUploadStatusAndClose('Sample-Spreadsheet-10-rows.csv');
  });

});
