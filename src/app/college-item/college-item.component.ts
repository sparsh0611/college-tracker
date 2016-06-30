import { Component, Input, ViewEncapsulation } from '@angular/core';
import { College } from '../models/College';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'college-item',
	templateUrl: 'college-item.component.html',
	styleUrls: ['college-item.component.css'],
	encapsulation: ViewEncapsulation.Emulated
})

export class CollegeItem {
	@Input() data: College;

	constructor(private _router: Router) { }

	goToDetails(college: College) {
		console.log(this._router.routeTree);
		this._router.navigate(['/college', college.id]);
	}
}
