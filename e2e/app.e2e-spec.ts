import { ZippyAccordianPage } from './app.po';

describe('zippy-accordian App', () => {
  let page: ZippyAccordianPage;

  beforeEach(() => {
    page = new ZippyAccordianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
