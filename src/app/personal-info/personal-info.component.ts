import { Component, OnInit } from '@angular/core';
import { PersonalDetailsService } from "../services/personal-details.service";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  public mailString;
  public mobileString;
  constructor(public perDetails: PersonalDetailsService) {
    this.mailString = "mailto:"+perDetails.prsnlObj.email+"?subject=files&body";
    this.mobileString = "tel:" + perDetails.prsnlObj.mobile;
  }

  ngOnInit() {
    console.log(this.perDetails);

  }

}
