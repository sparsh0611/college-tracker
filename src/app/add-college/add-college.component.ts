import { Component, Output, EventEmitter, Input } from '@angular/core';
import { College } from '../models/College';

@Component({
	moduleId: module.id,
	selector: 'add-college',
	templateUrl: 'add-college.component.html'
})

export class AddCollege {
	@Input() colleges: College[];
	@Output() collegeAdded: EventEmitter<College> = new EventEmitter<College>();
	constructor() { }
	selectedCollege: College = null;
	ngOnInit() {
		this.selectedCollege = this.colleges && this.colleges.length > 0 ? this.colleges[0] : null;
	}

	addCollege () {
		let indexInUnappliedCollegesList: number = this.colleges.indexOf(this.selectedCollege);
		if (indexInUnappliedCollegesList > -1) {
			this.colleges.splice(indexInUnappliedCollegesList, 1);
		}
		this.selectedCollege.isApplied = !this.selectedCollege.isApplied;
		this.collegeAdded.emit(this.selectedCollege);
		this.selectedCollege = this.colleges && this.colleges.length > 0 ? this.colleges[0] : null;
	}
}