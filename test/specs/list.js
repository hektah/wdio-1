import { expect as chaiExpect } from 'chai';
import ListPage from '../pages/list-page';

describe('validation of searching different product in amazon', () => {
    
    before(() => {
        ListPage.open();

    });

    it('should have product search & verify the product name', async () => {
    //should have correct title of an application
        await expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
        await browser.pause(2000); 

    //should have correct URL of an application
        await expect(browser).toHaveUrl("https://www.amazon.in/");
        await browser.pause(2000);

        await ListPage.electronicsBtn.waitForDisplayed({ timeout:3000 });
        await ListPage.electronicsBtn.click();
        await ListPage.mobileBtn.waitForDisplayed({ timeout:3000 });
        await ListPage.mobileBtn.moveTo();
        await ListPage.appleBtn.waitForDisplayed({ timeout:2000})
        await ListPage.appleBtn.click();
    /*//should verify the electronics category list
        const electronicsCategoryList = await ListPage.getelectronicsCategoryListText();
        chaiExpect(electronicsCategoryList).to.deep.equal();

    //selecting the product list & verifying the product name
        //const electronicsCategoryList = await $$('#departments ul li');
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
*/
}); 
});