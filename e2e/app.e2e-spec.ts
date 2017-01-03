import { MaterialFlexCliPage } from './app.po';

describe('material-flex-cli App', function() {
  let page: MaterialFlexCliPage;

  beforeEach(() => {
    page = new MaterialFlexCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
