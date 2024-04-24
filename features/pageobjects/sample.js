const { $ } = require('@wdio/globals')

//const assert = require('chai').assert;
//const expect = require('chai').expect;


const name ="//input[@class='ng-untouched ng-pristine ng-valid ng-star-inserted' and @placeholder='First Name']";
const address= "//input[@class='ng-untouched ng-pristine ng-valid ng-star-inserted' and @placeholder='Address Line 1']";
const city= "//input[@class='ng-untouched ng-pristine ng-valid ng-star-inserted' and @placeholder='City']";
const mno= "//input[@class='ng-untouched ng-pristine ng-valid ng-star-inserted' and @placeholder='Mobile Phone']";
const email="//input[@class='ng-untouched ng-pristine ng-valid ng-star-inserted' and @placeholder='Email Address']";
const btn= "//button[@id='npo-finish']";

class Sample{
    async sampleAction(){
        //const fname = (await $(name)).getText();
        //assert.equal(fname,'Janette','Text box1 does not contain the expected value');
        //const add= (await $(address)).getText();
        //assert.equal(add,'920 S Chatham Ave','Text box2 does not contain the expected value');
        //const cityField= (await $(city)).getText();
        //assert.equal(cityField,'Addison','Text box3 does not contain the expected value');
        //const mobileNo= (await $(mno)).getText();
        //assert.equal(mobileNo,'+1 (991) 668 7156','Text box4 does not contain the expected value');
        //const mail= (await $(email)).getText();
        //assert.equal(mail,'sphilip2@ph.com','Text box4 does not contain the expected value');
        (await $(btn)).click();
    }
}

module.exports= new Sample()