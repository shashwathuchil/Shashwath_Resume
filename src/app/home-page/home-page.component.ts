import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PersonalInfoComponent } from "../personal-info/personal-info.component";
import {WorkExperienceComponent} from "../work-experience/work-experience.component";
import {EducationDetailsComponent} from "../education-details/education-details.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
