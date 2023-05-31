//describe('Sign In', () => {
//   it('passes', () => {
//     cy.visit('https://automationteststore.com/index.php?rt=account/create')
  
//   cy.get('#AccountFrm_firstname').type('Olena');
//   cy.get('#AccountFrm_lastname').type('Novgorodchenko');
//   cy.get('#AccountFrm_email').type('olinov26@gmail.com');
//   cy.get('#AccountFrm_telephone').type('999999999');
//   cy.get('#AccountFrm_address_1').type('str.Shevchenka,4');
//   cy.get('#AccountFrm_city').type('Cherkasy');
//   cy.get('#AccountFrm_postcode').type('12345');
//   cy.get('#AccountFrm_country_id').select('Ukraine');
//   cy.get('#AccountFrm_zone_id').select('Cherkasy')
//   cy.get('#AccountFrm_loginname').type('Olenatest');
//   cy.get('#AccountFrm_password').type('12345');
//   cy.get('#AccountFrm_confirm').type('12345');
//   cy.get('[type="radio"]').first().check();
//   cy.get('[type="checkbox"]').check();
//   cy.get('[title="Continue"]').click()
// })
// });

// describe('Fields validation', () => {
//   it('passes', () => {
//     cy.visit('https://automationteststore.com/index.php?rt=account/create')

//     cy.get('#AccountFrm_firstname').type('Olena'); 
//     cy.get('[title="Continue"]').click()

//     cy.get('.alert')
//     .should('contain', 'Error: You must agree to the Privacy Policy!');

//     cy.get('.input-group.col-sm-4').eq(1)
//     .siblings()
//    .should('contain', 'Last Name must be between 1 and 32 characters!');

//      cy.get('.input-group.col-sm-4').eq(2)
//     .siblings()
//     .should('contain', 'Email Address does not appear to be valid!');

//      cy.get('.input-group.col-sm-4').eq(6)
//     .siblings()
//     .should('contain', 'Address 1 must be between 3 and 128 characters!');

//      cy.get('.input-group.col-sm-4').eq(9)
//     .siblings()
//     .should('contain', 'Please select a region / state!');
    

//     cy.get('.input-group.col-sm-4').eq(10)
//     .siblings()
//     .should('contain', 'Zip/postal code must be between 3 and 10 characters!');

//     cy.get('.input-group.col-sm-4').eq(12)
//     .siblings()
//     .should('contain', 'Login name must be alphanumeric only and between 5 and 64 characters!');

//     cy.get('.input-group.col-sm-4').eq(13)
//     .siblings()
//     .should('contain', 'Password must be between 4 and 20 characters!');


//   })
// });
  

describe('Order Gucci', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/');

    cy.get('#customer_menu_top').click();
  cy.get('#loginFrm_loginname').type('OlenaTest');
  cy.get('#loginFrm_password').type('12345');
  cy.get('[title="Login"]').click()
  cy.get('#search_form').type('Gucci');
  cy.get('[title="Go"]').click();
  cy.get('[data-id="110"]').eq(0).click();
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout2').click();
  cy.get('#checkout_btn').click();

  cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
  cy.get('.url').should('contain', ' success');



})
  
  });

  