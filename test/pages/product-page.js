import Page from './common-page';

class ProductPage extends Page {
    //const txtSearchBox = await $('#twotabsearchtextbox');
get txtSearchBox() {
        return $('#twotabsearchtextbox');
}
//const btnSearch = await $('#nav-search-submit-button');
get btnSearch (){
        return $('#nav-search-submit-button');
}

open () {
super.open('http://www.amazon.in');
}
}

export default new ProductPage();