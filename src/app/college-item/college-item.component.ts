import { Component, Input } from '@angular/core';
import {College} from '../models/College';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'college-item',
	templateUrl: 'college-item.component.html',
	styleUrls: ['college-item.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class CollegeItem {
	@Input() data: College;

	constructor(private _router: Router) { }

	goToDetails(college: College) {
		this._router.navigate(['/college', college.id]);
	}
}
