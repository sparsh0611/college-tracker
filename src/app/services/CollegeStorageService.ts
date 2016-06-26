import {Injectable} from '@angular/core';
import {College} from '../models/College';

@Injectable()

export class CollegeStorageService {
	save(college: College) : void {
		localStorage.setItem('College_' + college.id.toString(), JSON.stringify(college));
	}

	getAll() : College[] {
		let colleges: College[] = [];
		for (var key in localStorage) {
			if (key.indexOf('College_') > -1) {
				var collegeObj = JSON.parse(localStorage.getItem(key));
				let college: College = new College(collegeObj.id, collegeObj.name, collegeObj.details, collegeObj.isApplied);
				colleges.push(college);
			}
		}
		return colleges;
	}
}