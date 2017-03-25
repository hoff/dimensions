import { DimensionsPage } from './app.po';

describe('dimensions App', () => {
  let page: DimensionsPage;

  beforeEach(() => {
    page = new DimensionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
