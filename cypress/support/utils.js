export function uploadFile(fileName) {
    cy.get('input[type="file"][name="file"]').attachFile(fileName);
  }

export function checkUploadStatusAndClose(fileName) {
    cy.get('.chakra-text').contains('100').parent().contains('Uploaded').then(($uploadStatus) => {
      if ($uploadStatus.length > 0) {
        cy.contains('Close').click();
      } else {
        throw new Error('Upload progress is not 100%');
      }
    });
    cy.contains(fileName).should('be.visible');
  }