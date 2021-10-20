import Page from './common-page';

class WatchesPage extends Page {

//div[@class="txtSearchBox"]//descendant::option[@value="search-alias=watches"]
get searchInBtn() {
    return $('//select[@title="Search in"]//descendant::*[41]')
}
//#twotabsearchtextbox
get txtSearchBox(){
    return $('#twotabsearchtextbox')
}
//#nav-global-location-popover-link
get deliverBtn() {
    return $('#nav-global-location-popover-link')
}
//input[@value="639004"]
get valueBtn(){
    return $('//input[@value="639004"]')
}
//input[@type="submit"]
get submitBtn(){
    return $('//input[@type="submit"]')
}
open () {
super.open("http://www.amazon.in");
}
}

export default new WatchesPage();