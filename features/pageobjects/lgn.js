const { $ } = require('@wdio/globals')


const login="//input[@id='signInName']";
const psswdField= "//input[@id='password']";
const loginBtn= "//button[@id='next']";
const uname="JRojas";
const psswd="Passw0rd@123$";

class Login{
    

    async loginAction(){
        await login.setValue(uname);
        await psswdField.setValue(psswd);
        await browser.pause(2000);
        await this.loginBtn.click();
    }
}

module.exports= new Login()