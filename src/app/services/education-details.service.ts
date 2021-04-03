import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationDetailsService {
  public eduDelObj = [
    {
      lable:" Diploma in Computer Science and Engineering / Karnataka (Govt.) Polytechnic",
      duration:"2016",
      board:"Department of Technical Education"
    },
    {
      lable:"Pre University College / St.Aloysius PU College Mangalore",
      duration:"2013",
      board:"Department Of Pre-University Education"
    },
    {
      lable:"High School / St.Aloysius High School Mangalore",
      duration:"2011",
      board:"Karnataka Secondary Education Examination Board"
    }
  ]
  constructor() { }
}
