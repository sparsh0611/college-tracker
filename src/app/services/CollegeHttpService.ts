
import {Injectable} from '@angular/core';
import {College} from '../models/College';
import 'rxjs/Rx';
import { Observable } from 'rxJs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()


export class CollegeHttpService {
	constructor(private _http: Http){}

	getColleges(): Observable<College[]> {
        return this._http.get('api/colleges/colleges.json')
			.map((response: Response) => response.json().map(data => new College(data.id, data.name, data.details, data.isApplied)))
	          	.do(data => console.log('All: ' + JSON.stringify(data)));
		        // .catch(this.handleError);
    }

    getCollege(id: number): Observable<College> {
		return this.getColleges().map((colleges: College[]) => colleges.find(college => college.id === id));
    }

	handleError() {
		console.log("http service error", arguments);
	}
}