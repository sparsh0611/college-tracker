import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CollegeTrackerAppComponent } from '../app/college-tracker.component';

beforeEachProviders(() => [CollegeTrackerAppComponent]);

describe('App: CollegeTracker', () => {
  it('should create the app',
      inject([CollegeTrackerAppComponent], (app: CollegeTrackerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'college-tracker works!\'',
      inject([CollegeTrackerAppComponent], (app: CollegeTrackerAppComponent) => {
    expect(app.title).toEqual('college-tracker works!');
  }));
});
