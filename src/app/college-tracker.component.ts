import { Component } from '@angular/core';
import { CollegeHttpService } from './services/CollegeHttpService';
import { AddCollege } from './add-college/add-college.component';
import { College } from './models/College';
import { CollegeItem } from './college-item/college-item.component';

@Component({
  moduleId: module.id,
  selector: 'college-tracker-app',
  templateUrl: 'college-tracker.component.html',
  styleUrls: ['college-tracker.component.css'],
  providers: [CollegeHttpService],
  directives: [AddCollege, CollegeItem]
})
export class CollegeTrackerAppComponent {
	constructor(private _collegeHttpService: CollegeHttpService) { }
	title = 'College Tracker';
	appliedColleges: College[] = [];
	unappliedColleges: College[] = [];
	ngOnInit() {
		var colleges = this._collegeHttpService.getColleges();
		this.appliedColleges = colleges.filter(record => record.isApplied);
		this.unappliedColleges = colleges.filter(record => !record.isApplied );
	}

	onCollegeAdded (college: College) {
		this.appliedColleges.push(college);
	}
}
