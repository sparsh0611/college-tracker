import { CollegeTrackerPage } from './app.po';

describe('college-tracker App', function() {
  let page: CollegeTrackerPage;

  beforeEach(() => {
    page = new CollegeTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('college-tracker works!');
  });
});
