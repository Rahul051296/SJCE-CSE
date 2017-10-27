import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LabComponent } from './lab/lab.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyDetailsService } from './faculty-details.service';
import { StudentsComponent } from './students/students.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SmoothScrollToDirective, SmoothScrollDirective } from "../../node_modules/ng2-smooth-scroll";
import { AgmCoreModule } from '@agm/core';
import { NgProgressModule } from 'ngx-progressbar';
import { HttpModule } from '@angular/http';
import { CpanelComponent } from './cpanel/cpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LabComponent,
    FacultyComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    StudentsComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent,
    CpanelComponent
  ],
  imports: [
    BrowserModule,
    NgProgressModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAx5CZ3ctMUfAybIslLB0Jy_Dac3HvL-6M'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'faculty',
        component: FacultyComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'laboratory',
        component: LabComponent
      },
      {
        path: 'cpanel',
        component: CpanelComponent
      }
    ])
  ],
  providers: [FacultyDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
