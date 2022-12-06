describe('Tutorialspoint Test', function () {
    // test case
    it.only("Alert box", function () {
    // URL launched
    cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
   
     // click on Click for JS Confirm button
     cy.get('#alert').click()
     //fire confirm browser event
     cy.on("window:alert", (s) => {
       expect(s).to.equal("I'm an Alert Box")
      });
   
    });
})