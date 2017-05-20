import { SaasAppPage } from './app.po';

describe('saas-app App', () => {
  let page: SaasAppPage;

  beforeEach(() => {
    page = new SaasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
