import {Pipe, PipeTransform} from '@angular/core';
import {College} from '../models/College';

@Pipe({
	name: 'filterCollege',
	pure: false
})

export class FilterCollege implements PipeTransform {
	transform(colleges: College[], filter: string): College[] {
       	filter = filter ? filter.toLowerCase().trim() : null;
      	return filter ? colleges.filter((college: College) =>
			  college.name.toLowerCase().indexOf(filter) !== -1) : colleges;
    }
}