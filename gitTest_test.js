Feature('cosi');

Scenario('test something', (I) => {
    I.amOnPage('https://google.cz/')
    I.seeInTitle('Google')
    I.waitForElement({xpath: "//input[@name='q']"})
    I.click({xpath: "//input[@name='q']"})
    I.fillField({xpath: "//input[@name='q']"}, 'brno')
    I.click({xpath: "(//span[./text()='brno'])[1]"})
    // I.clickLink('Brno - oficiální web statutárního města Brna')
    I.click({xpath: "(//cite[./text()='www.brno.cz'])[1]"})
    I.seeInTitle('Brno - oficiální web statutárního města Brna')
    // I.waitForElement({xpath: "//span[./text()='Brno aktuálně']"})
    pause()

});
