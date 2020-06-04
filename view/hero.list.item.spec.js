describe('SuperHero list details: ', function() {
    describe('When clicking on a hero: ', function() {
        var heroName;

        beforeEach(function() {
            browser.get('http://localhost:4200/');
            
        });

        it('Should show the correct data when clicking on a hero', function() {
        
            var firstElement = element(by.css('app-dashboard div:first-of-type h4'));
            var heroName = firstElement.getText();
            firstElement.getText().then(function(text) {
                console.log(text);
            });
            
            console.log(heroName);
            
            
            firstElement.click();

            browser.waitForAngular();

            var heroHeader = element(by.css('app-hero-detail h2'));
            expect(heroHeader.getText()).toMatch(heroName + ' Details');


        });

        it('Should be able to create a hero', function() {
            var heroesLink = element(by.css('nav a[href="/heroes"]'));
            heroesLink.click();
            browser.waitForAngular();
            var hero = element(by.xpath('//label/input'));
            hero.sendKeys('CM');

            var addHeroBtn = element(by.css('label ~ button'));
            addHeroBtn.click();

            browser.waitForAngular();

            var newHeroElem = element(by.css('.heroes > li:last-of-type'));
            expect(newHeroElem.getText()).toContain('CM');
        });

        it("Should display the correct id in the details page", function() {
            var heroesLink = element(by.css('nav a[href="/heroes"]'));
            heroesLink.click();
            browser.waitForAngular();
            //a[contains(.,'RubberMan')]/span[@class='badge']
        });
    });
});