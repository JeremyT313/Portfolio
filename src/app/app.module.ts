import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SkillsComponent, MainComponent, EducationComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
