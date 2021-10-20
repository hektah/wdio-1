import Page from './common-page';

class ListPage extends Page {

//a[normalize-space(text())="Electronics"]
get electronicsBtn() {
    return $('//a[normalize-space(text())="Electronics"]')
}
//span[normalize-space(text())="Mobiles & Accessories"]
get mobileBtn() {
    return $(`//span[normalize-space(text())="Mobiles & Accessories"]`)
}
//a[text()="Apple"]
get appleBtn() {
    return $(`//a[text()="Apple"]`)
}

open () {
super.open("http://www.amazon.in");
}
}

export default new ListPage();