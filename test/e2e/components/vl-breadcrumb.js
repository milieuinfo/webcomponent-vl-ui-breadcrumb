const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlBreadcrumb extends VlElement {
  async getLink(number) {
    const links = await this.getLinks();
    return links[--number];
  }

  async getLinks() {
    const links = await this.findElements(By.css('ol > li > a'));
    return Promise.all(links.map((link) => new VlElement(this.driver, link)));
  }
}

module.exports = VlBreadcrumb;
