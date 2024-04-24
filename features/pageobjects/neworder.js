const { $ } = require('@wdio/globals')

const addLookup= "//span[contains(text(),'Add/Look Up Item')]";
const heading= "//th[normalize-space()='Description']";
const item= "//body[1]/div[5]/div[2]/div[1]/app-catalog-browser-popup[1]/table[1]/tr[4]/td[6]/button[1]";
const newItem= "//td[normalize-space()='Name Cotton Towel']";
const paymentBtn= "//span[normalize-space()='4 - Payments']";
const addPayment= "//button[@id='add-new-payment']";
const methodPay= "/html/body/div[5]/div[2]/div/div/div/a";

class NewOrder{
    async newOrderAdd(){
        (await $(addLookup)).waitForDisplayed({timeout:4000});
        (await $(addLookup)).click();
        await $(item).waitForDisplayed({timeout:4000});
        (await $(item)).click();
        await browser.pause(3000);
        //(await $(newItem)).waitForDisplayed({timeout:5000});
        (await $(paymentBtn)).click();
        await browser.pause(3000);
        (await $(addPayment)).click();
        (await $(methodPay)).click();

    }
}
module.exports= new NewOrder();