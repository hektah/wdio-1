import { expect as chaiExpect } from 'chai';
import ProductPage from '../pages/product-page';

describe('validation of searching different product in amazon', () => {

    before(() => {
        ProductPage.open();
    });

    it('should have product search & verify the product name', async () => {

        expect(browser).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
        await browser.pause(2000);
        expect(browser).toHaveUrl("https://www.amazon.in");
        await browser.pause(2000);
        await ProductPage.txtSearchBox.waitForClickable({timeout:2000});
        await ProductPage.txtSearchBox.setValue("watches");
        await ProductPage.btnSearch.click();
        await browser.pause(3000);

        let currentUrl = await browser.getUrl();
        //verifying the current page url
        console.log(currentUrl);
        chaiExpect(currentUrl).to.be.include('watches');

        //selecting the product & verifying the product name
        const product = await $(`//span[text()='TIMEWEAR']/preceding::img[1]`);
        await product.click();
        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        const productName = await $('#productTitle').getText();
        chaiExpect(productName).to.be.include("TIMEWEAR");
        
    });
});