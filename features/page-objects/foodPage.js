const { TIMEOUT_SHORT } = require('../config');

module.exports = {

   commands: [{
        async setValueForLocationAndPeople(city, peopleNum){
             await  this.api.waitForElementVisible('#google-autocomplete', TIMEOUT_SHORT)
                        .setValue('#google-autocomplete',city)
                        .pause(2*1000)
                        .sendKeys('#google-autocomplete', this.api.Keys.ARROW_DOWN)
                        .click(`option[value='${peopleNum}']`)
                        .pause(2*1000)
                        .click("button[data-qa='el:findRestaurantsVoucherButton']");
     },
   }]
};