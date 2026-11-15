describe ("hw19", ()=>{
    it("test1", ()=>{
        cy.visit("https://qauto.forstudy.space/",{
            auth:{
                username:"guest",
                password:"welcome2qauto"
            },
        });
        cy.get('a.btn.header-link.-active').should('have.text','Home').and('exist');
        cy.get('button[appscrollto="aboutSection"]').should('exist','be.visible');
        cy.get('button[appscrollto="contactsSection"]').should('exist','be.visible');
    });
    it("test2", ()=>{
         cy.visit("https://qauto.forstudy.space/",{
            auth:{
                username:"guest",
                password:"welcome2qauto"
            },
         });
            cy.get('a.socials_link').should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School').and('have.attr', 'rel', 'nofollow');
            cy.get('a.socials_link').eq(1).should('have.attr', 'href', 'https://t.me/ithillel_kyiv').and('have.attr', 'rel', 'nofollow');
            cy.get('a.socials_link').eq(2).should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1').and('have.attr', 'rel', 'nofollow');
            cy.get('a.socials_link').eq(3).should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/').and('have.attr', 'rel', 'nofollow');
            cy.get('a.socials_link').eq(4).should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/').and('have.attr', 'rel', 'nofollow');
            cy.get('a.contacts_link.display-4').should('have.attr', 'href', 'https://ithillel.ua').and('have.attr', 'rel', 'nofollow');
            cy.get('a.contacts_link.h4').should('have.attr', 'href', 'mailto:developer@ithillel.ua');
    });
})
