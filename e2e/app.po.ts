export class CollegeTrackerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('college-tracker-app h1')).getText();
  }
}
