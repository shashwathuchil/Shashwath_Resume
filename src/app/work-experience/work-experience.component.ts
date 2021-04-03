import { Component, OnInit } from '@angular/core';
import { JobDetailsService } from "../services/job-details.service"
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor(public JobDel:JobDetailsService) { }

  ngOnInit() {
  }

}
