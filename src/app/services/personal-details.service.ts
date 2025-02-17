import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  public prsnlObj={
    name:"Shashwath A Uchil",
    place:"Karnataka, India",
    email:"shashwathamruthuchil@gmail.com",
    resume:"assets/SHASHWATH_UI_DEV_8.6_YR.pdf",
    mobile:"8867515162",
    job: "Front-End Developer",
    skills:[
      {
        label:"HTML",
        percentile:"100%",
      },
      {
        label:"CSS",
        percentile:"100%",
      },
      {
        label:"Javascript",
        percentile:"100%",
      },
      {
        label:"SCSS",
        percentile:"100%",
      },
      {
        label:"Angular js",
        percentile:"50%",
      },
      {
        label:"Angular 2+",
        percentile:"100%",
      },
      {
        label:"Angular 16",
        percentile:"100%",
      },
      {
        label:"Angular 19",
        percentile:"100%",
      },
      {
        label:"Ionic 1",
        percentile:"100%",
      },
      {
        label:"Ionic 2",
        percentile:"100%",
      },
      {
        label:"Ionic 3",
        percentile:"100%",
      },
      {
        label:"Ionic 6",
        percentile:"100%",
      },
      {
        label:"Ionic 7",
        percentile:"100%",
      },
      {
        label:"React js",
        percentile:"100%",
      },
      {
        label:"React native",
        percentile:"90%",
      },
    ],
    languages:[
      {
        label:"English",
        percentile:"100%"
      },
      {
        label:"Kannada",
        percentile:"100%"
      },
      {
        label:"Hindi",
        percentile:"70%"
      },
      {
        label:"Tulu",
        percentile:"60%"
      },
    ]
  }
  constructor() {

   }
}
