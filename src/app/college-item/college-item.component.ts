import { Component, Input } from '@angular/core';
import {College} from '../models/College';


@Component({
	moduleId: module.id,
	selector: 'college-item',
	templateUrl: 'college-item.component.html',
	styleUrls: ['college-item.component.css']
})

export class CollegeItem {
	@Input() data: College;

	constructor() {
	}
	toggle(): void {
		this.data.toggle();
	}
}