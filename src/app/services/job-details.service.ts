import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {
  public eduObj = [{
    jobTitle: "Associate Software Engineer(L2) / Niveus Solutions",
    durationFrom: "July 2020",
    durationTo: "",
    description: "Working as front end developer for ICICI client for Niveus solutions, as it was pandemic time working from home till date",
    current: true
  }, {
    jobTitle: "Senior Software Engineer / Novigo Solutions",
    durationFrom: "January 2019",
    durationTo: "July 2020", description: "Worked as a font end developer for multiple projects ranging from e-commerce to banking applications",
    current: false
  }, {
    jobTitle: "Software Engineer / Fork Technologies",
    durationFrom: "August 2018",
    durationTo: "October 2018", description: "Worked as a front end developer for IEEE mobile app",
    current: false
  }, {
    jobTitle: "Software Engineer / Techpearl Software Pvt Ltd",
    durationFrom: "June 2016",
    durationTo: "July 2018", description: "Started my career in this company and mostly worked on e-commerce B2B applications",
    current: false
  }]
  constructor() { }
}
