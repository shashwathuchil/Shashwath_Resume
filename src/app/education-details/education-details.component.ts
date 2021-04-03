import { Component, OnInit } from '@angular/core';
import { EducationDetailsService } from "../services/education-details.service"

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {

  constructor(public eduDel: EducationDetailsService) {
   }

  ngOnInit() {
  }

}
