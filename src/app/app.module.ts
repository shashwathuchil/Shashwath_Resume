import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationDetailsComponent } from './education-details/education-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    PersonalInfoComponent,
    WorkExperienceComponent,
    EducationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
