import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'college-tracker-app',
  templateUrl: 'college-tracker.component.html',
  styleUrls: ['college-tracker.component.css'],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
	{ path: '/colleges', component: CollegeListComponent },
	{ path: '/college/:id', component: CollegeDetailComponent }
])

export class CollegeTrackerAppComponent {
	constructor(private _router: Router){ }
	title = 'College Tracker';
}
