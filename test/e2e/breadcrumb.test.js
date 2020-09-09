const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlBreadcrumbPage = require('./pages/vl-breadcrumb.page');

describe('vl-breadcrumb', async () => {
  const vlBreadcrumbPage = new VlBreadcrumbPage(driver);

  before(() => {
    return vlBreadcrumbPage.load();
  });

  it('Als gebruiker kan ik een breadcrumb met items zien', async () => {
    const breadcrumb = await vlBreadcrumbPage.getBreadcrumb();
    await assert.eventually.isTrue(breadcrumb.isDisplayed());
    await assert.eventually.lengthOf(breadcrumb.getLinks(), 4);
    const link1 = await breadcrumb.getLink(1);
    const link2 = await breadcrumb.getLink(2);
    const link3 = await breadcrumb.getLink(3);
    const link4 = await breadcrumb.getLink(4);
    await assert.eventually.equal(link1.getText(), 'Vlaanderen Intern');
    await assert.eventually.equal(link2.getText(), 'Regelgeving');
    await assert.eventually.equal(link3.getText(), 'Webuniversum');
    await assert.eventually.equal(link4.getText(), 'Componenten');
  });
});
