import {Pipe, PipeTransform} from '@angular/core';
import {College} from '../models/College';

@Pipe({
	name: 'filterCollege',
	pure: false
})

export class FilterCollege implements PipeTransform {
	transform(colleges: College[], args) {
		return colleges.filter(item => item.isApplied == args.isApplied);
	}
}