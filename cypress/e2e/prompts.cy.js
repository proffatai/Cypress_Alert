describe('Tutorialspoint Test', function () {
  // test case
  it("When Okay is clicked", function () {
  //URL launch
  cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")

  //handling prompt alert:
  cy.window().then(p=>{ //we have to first handle the stub before clicking the button that brings the prompt, otherwise, the button]
    // would have appeared.
  //stubbing prompt window
  cy.stub(p, "prompt").returns("Ibrahim"); //So we stub the network ahead that whenever a prompt appears, we want we to enter the value ibrahim into it
  });
     
    // click on Click for JS Prompt button
    cy.get('#prompt').click() // now we are clicking
  // verify application message on clicking on OK
  cy.get('#confirmdiag').should('have.text','PROMPT - Hello Ibrahim! How are you today?').and('be.visible') //verifying what I entered is present
  });

})