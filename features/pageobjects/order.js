const { $ } = require('@wdio/globals')

const newOrder="//button[@id='add-new-order-button']";
const sample="//a[normalize-space()='Samples & Supplies Order']";

class Orders{
    

    async action(){
        await newOrder.click();
        await sample.click();
        
    
    }
}
module.exports= new Orders()