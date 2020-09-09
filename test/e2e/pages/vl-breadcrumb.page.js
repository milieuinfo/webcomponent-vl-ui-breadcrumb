const VlBreadcrumb = require('../components/vl-breadcrumb');
const {Page, Config} = require('vl-ui-core').Test;

class VlBreadcrumbPage extends Page {
  async getBreadcrumb() {
    return this._getBreadcrumb('[is="vl-breadcrumb"]');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-breadcrumb.html');
  }

  async _getBreadcrumb(selector) {
    return new VlBreadcrumb(this.driver, selector);
  }
}

module.exports = VlBreadcrumbPage;
