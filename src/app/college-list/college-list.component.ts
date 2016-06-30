import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CollegeHttpService } from '../services/CollegeHttpService';
import { CollegeStorageService } from '../services/CollegeStorageService';
import { AddCollege } from '../add-college/add-college.component';
import { College } from '../models/College';
import { CollegeItem } from '../college-item/college-item.component';
import { FilterCollege } from '../shared/filterCollege.pipe';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CollegeDetailComponent } from '../college-detail/college-detail.component';

@Component({
	moduleId: module.id,
	selector: 'college-list',
	templateUrl: 'college-list.component.html',
	styleUrls: ['college-list.component.css'],
	providers: [CollegeHttpService, CollegeStorageService],
	directives: [AddCollege, CollegeItem, ROUTER_DIRECTIVES],
	pipes: [FilterCollege]
})

// @Routes([
// 	{ path: '/college/:id', component: CollegeDetailComponent }
// ])

export class CollegeListComponent implements OnInit {
	appliedColleges: College[] = [];
	unappliedColleges: College[] = [];
	listFilter: string = '';
	constructor(private _collegeHttpService: CollegeHttpService, private _collegeStorageService: CollegeStorageService) { }
	
	ngOnInit() {
		var colleges = this._collegeStorageService.getAll();
		if (colleges.length == 0) {
			this._collegeHttpService.getColleges().subscribe(data => {
				this.filterAppliedCollegeRecords(data);
				this._collegeStorageService.saveAll(data);
			});
		}
		else {
			this.filterAppliedCollegeRecords(colleges);
		}
	}

	filterAppliedCollegeRecords(colleges: College[]) {
		this.appliedColleges = colleges.filter(record => record.isApplied);
		this.unappliedColleges = colleges.filter(record => !record.isApplied);
	}
	
	onCollegeAdded (college: College) {
		this.appliedColleges.push(college);
	}
}
