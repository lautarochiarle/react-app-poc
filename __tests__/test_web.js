
var expect = require('chai').expect;

var wd = require('wd'),
    driver = wd.promiseChainRemote({
        host: 'localhost',
        port: 4723
    });


var assert = require('assert');
describe('AWSDeviceFarmReferenceAppTest', function () {


    before(function () {
        this.timeout(300 * 1000);
        return driver.init();
    });


    after(function () {
        console.log("quitting");
    });


    it('test_app_is_loaded', async () => {
        expect(await driver.hasElementByAccessibilityId('submitButton')).to.exist;
        const element = await driver.elementByAccessibilityId('submitButton')
        await element.click()
        expect(await driver.hasElementByAccessibilityId('notHere')).to.not.exist;
        });    

});    