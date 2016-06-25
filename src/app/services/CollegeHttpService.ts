
import {Injectable} from '@angular/core';
import {College} from '../models/College';

@Injectable()


export class CollegeHttpService {
	constructor(){}

	getColleges(): College[] {
		return [
			new College('College 1', 'College 1 details', false, true), 
			new College('College 2', 'College 2 details', false, false),
			new College('College 3', 'College 3 details', true, true)
		];
	}

	handleError() {
		console.log("http service error", arguments);
	}
}