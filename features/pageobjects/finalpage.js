const { $ } = require('@wdio/globals')

const submitBtn="//button[@id='submit-button']";

class Submit{
    async actionBtn(){
    await $(submitBtn).click()
    }
}

module.exports= new Submit()