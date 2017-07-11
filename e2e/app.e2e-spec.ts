import { CsePage } from './app.po';

describe('cse App', () => {
  let page: CsePage;

  beforeEach(() => {
    page = new CsePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
