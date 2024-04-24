const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const lgn = require('../pageobjects/lgn');
const order = require('../pageobjects/order');
const sample = require('../pageobjects/sample');
const neworder = require('../pageobjects/neworder');
const pay = require('../pageobjects/pay');
const finalpage = require('../pageobjects/finalpage');


Given(/^I am on the login page$/, async() => {
    await browser.url('https://test-cc.princesshouse.com/en-US/');
    await browser.maximizeWindow();
    (await $("//img[@id='ph-company-logo']")).waitForDisplayed({timeout:15000});
    await browser.pause(15000);
	return true;
});

When(/^I enter the username and password$/, async() => {
    await lgn.loginAction();
    await browser.pause(15000);
	return true;
});

Then(/^it should go to the home page$/, async() => {
    //(await $("//div[@class='card-body px-3 pt-2 pb-3']//p[@class='card-title d-none mb-1 d-lg-block']")).waitForDisplayed({timeout:10000})
    //await expect("//div[@class='card-body px-3 pt-2 pb-3']//p[@class='card-title d-none mb-1 d-lg-block']")
	return true;
});

When(/^I click on orders button$/, async() => {
    await browser.pause(2000);
    await $("//span[contains(text(),'Orders')]").click();
    await browser.pause(2000);
	return true;
});

Then(/^It should go to orders page$/, async() => {
    await expect("//h1[normalize-space()='My Orders']")
	return true;
});

When(/^I click on new orders$/, async() => {
    await order.action();

	return true;
});

Then(/^it should go to that page$/, async() => {
    await expect("//h1[normalize-space()='Samples & Supplies Order']")
	return true;
});

When(/^I click on create order$/, async() => {
    await sample.sampleAction();
    await browser.pause(3000);
	return true;
});

Then(/^it should go to the next page$/, async() => {
    await expect("//h5[normalize-space()='Overview']")
	return true;
});


When(/^I add something and select payment method$/, async() => {
    await neworder.newOrderAdd();
    await browser.pause(4000);
    
	return true;
});

Then(/^payment page should appear$/, async() => {
    await expect("//h1[normalize-space()='Add Credit or debit card payment']")
	return true;
});

When(/^I put in the payment details$/, async() => {
    await pay.paymentDetails();
    await browser.pause(3000);
	return true;
});

When(/^click submit order$/, async() => {
    await finalpage.actionBtn();
    await browser.pause(2000);
	return true;
});

Then(/^order should be placed.$/, async() => {
    await expect("//h4[normalize-space()='Order Confirmation']");
	return true;
});
