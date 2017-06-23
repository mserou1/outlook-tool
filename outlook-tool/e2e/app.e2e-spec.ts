import { OutlookToolPage } from './app.po';

describe('outlook-tool App', () => {
  let page: OutlookToolPage;

  beforeEach(() => {
    page = new OutlookToolPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
