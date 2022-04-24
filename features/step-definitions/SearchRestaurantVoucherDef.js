const { client } = require('nightwatch-api');
const { Given, Then,When } = require('cucumber');
const { url } = require('../config');
const { assert } = require('chai');
const Debug = require('debug');

const homePage = client.page.homePage();
const commonPage = client.page.commonPage();
const foodPage = client.page.foodPage();

const debug = Debug('INTRO-TO-NIGHTWATCHJS:features:steps-definitions:SearchRestaurantVoucherDef');

Given('I visit home page', function () {
    debug('url is  %s', url);
    client.url(url);
});

Given('I navigate to {string} header', async function (header) {
    debug('navigate to header %s', header);
    await homePage.navigateToHeaderWithObject(header);
    await client.pause(3*1000);
});

When('I search voucher for {int} people in {string}',async function (peopleNum, city) {
    debug('people number is  %s', peopleNum);
    debug('city location  is  %s', city);
    await foodPage.setValueForLocationAndPeople(city,peopleNum);
    this.city = city;
});

Then('I am directed to search result page for {int} people', async function (peopleNum) {
    // needs final confirmation
    // client.pause(5*1000);  
    const currentURL =  await commonPage.getCurrentUrl(result);
    const arrayCity = currentURL.split("rl=");

    client.assert.urlContains(`restaurant-vouchers/search?rp=${peopleNum}` || `lat=${peopleNum}`);
    assert.isTrue(arrayCity[1].startsWith(this.city),`verify restaurant location is ${this.city}, but got something else`);
});