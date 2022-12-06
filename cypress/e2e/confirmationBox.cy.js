describe('Tutorialspoint Test', function () {
    // test case
    it.only("Confirmation box: Click Ok", function () {
    // URL launched
    cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
   
    // click on Click for JS Confirm button
    cy.get('#confirm').click()
     //fire confirm browser event
     cy.on("window:confirm", (s) => {
       expect(s).to.equal("I'm a Confirm Box")
      });
    // verify application message on Cancel button click
    cy.get('h2').should('have.text', 'CONFIRM - You pressed OK!')
    });

    it("Confirmation box: Click Cancel", function () {
        // URL launched
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes.html")
       
        // click on Click for JS Confirm button
        cy.get('#confirm').click()
         //fire confirm browser event
         cy.on("window:confirm", (s) => {
          return false;
          });
        // verify application message on Cancel button click
        cy.get('h2').should('have.text', 'CONFIRM - You pressed Cancel!')
        });
   });