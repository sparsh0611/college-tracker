import { Component, Input } from '@angular/core';
import {College} from '../models/College';
import { Router, OnActivate, RouteSegment } from '@angular/router';
import { CollegeHttpService } from '../services/CollegeHttpService';


@Component({
	moduleId: module.id,
	selector: 'college-detail',
	templateUrl: 'college-detail.component.html',
	providers: [CollegeHttpService]
})

export class CollegeDetailComponent implements OnActivate {
	@Input() data: College;
	college: College;
	constructor(private _collegeHttpService: CollegeHttpService) {
	}

	routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');
        this.getProduct(id);
    }

	getProduct(id: number) {
        this._collegeHttpService.getCollege(id).subscribe(college => this.college = college);
    }
}