const { $ } = require('@wdio/globals')

const checkBox= "//label[@for='mat-checkbox-1-input']//span[@class='mat-checkbox-inner-container']";
const field1="//input[@name='cardholder-name' and @data-braintree-name='cardholderName']";
const field2="//input[@name='credit-card-number' and @data-braintree-name='number']";
const field3="//input[@name='expiration' and @data-braintree-name='expirationDate']";
const field4="//input[@name='cvv' and @data-braintree-name='cvv']"
const amt="//input[@name='amount']";
const payBtn= "//button[@id='add-payment-modal-add']";
const txtLocator= "//div[@class='value balance-value']";
const nxtBtn="//button[@id='next-button']";
const name="Santhosh Philip";
const cardno="4111 1111 1111 1111";
const expDate="12/2030";
const cvv="123";


class Payment{
    async paymentDetails(){
        await browser.pause(2000);
        const amtToPay= await $(txtLocator).getText();
        await $(amt).setValue(amtToPay);
        (await $(checkBox)).click();
        await browser.pause(4000);
        const iframe1=await $("//iframe[@id='braintree-hosted-field-cardholderName']");
        await browser.switchToFrame(iframe1);
        await $(field1).setValue(name);
        await browser.switchToParentFrame();
        await browser.pause(2000);
        const iframe2=await $("//iframe[@id='braintree-hosted-field-number']");
        await browser.switchToFrame(iframe2);
        await $(field2).setValue(cardno);
        await browser.switchToParentFrame();
        const iframe3=await $("//iframe[@id='braintree-hosted-field-expirationDate']");
        await browser.switchToFrame(iframe3);
        await $(field3).setValue(expDate);
        await browser.switchToParentFrame();
        const iframe4=await $("//iframe[@id='braintree-hosted-field-cvv']");
        await browser.switchToFrame(iframe4);
        await $(field4).setValue(cvv);
        await browser.switchToParentFrame();
        await browser.pause(2000);
        await $(payBtn).click();
        await browser.pause(2000);
        await browser.switchToParentFrame()
        await $(nxtBtn).click();
    }
}
module.exports= new Payment()