import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pages/watches-page';

describe('validation of watches in amazon', () => {
    
    before(() => {
        WatchesPage.open();

    });

it('should search watches & verify the product', async () => {
    //Hit amazon
    await expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    //await browser.pause(1000); 

    //should have correct URL of an amazon
    await expect(browser).toHaveUrl("https://www.amazon.in/");
    //await browser.pause(1000);

    //click on the search category button
    //await WatchesPage.searchInBtn.waitForDisplayed ({ timeout: 2000 });
    //await WatchesPage.searchInBtn.click();

    //searching for the product category
    await WatchesPage.txtSearchBox.waitForClickable ({timeout:2000});
    await WatchesPage.txtSearchBox.setValue("fast track");
    await WatchesPage.btnSearch.click();
    await browser.pause(3000);

    //verifying the page title
    let currentUrl = await browser.getUrl();
    console.log(currentUrl);
    chaiExpect(currentUrl).to.be.include('fast track');

});

it('should verify the location', async () => {
    //Hit amazon
    await expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    await browser.pause(1000); 

    //selecting the pincode
    await WatchesPage.deliverBtn.waitForClickable({timeout:2000});
    await WatchesPage.btnSearch.click();
    await WatchesPage.deliverBtn.setValue("639004");
    await browser.pause(2000);

    //verifying the location changes
    await expect(browser).toHaveTitle("");
    await browser.pause(1000); 

}); 
it('should verify the account page', async () => {
    //Hit amazon
    await expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    await browser.pause(1000); 

    //clicking your account link
    await WatchesPage.accountsBtn.waitForDisplayed({ timeout:3000 });
    await WatchesPage.accountsBtn.moveTo();
    await WatchesPage.yourAccountLink.waitForDisplayed({ timeout:2000})
    await WatchesPage.yourAccountLink.click();

    //verify the account page
    let currentUrl = await browser.getUrl();
    console.log(currentUrl);
    chaiExpect(currentUrl).to.be.include('watches');

});
});
