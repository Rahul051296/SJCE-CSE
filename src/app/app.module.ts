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
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { PeoPsoComponent } from './peo-pso/peo-pso.component';
import { PoComponent } from './po/po.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { FacultyMentorsComponent } from './faculty-mentors/faculty-mentors.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { ResearchScholarsComponent } from './research-scholars/research-scholars.component';
import { PhdComponent } from './phd/phd.component';
import { ResearchProjectsComponent } from './research-projects/research-projects.component';
import { PatentsComponent } from './patents/patents.component';
import { PublicationsComponent } from './publications/publications.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProfessionalActivitiesComponent } from './professional-activities/professional-activities.component';
import { PlacementsComponent } from './placements/placements.component';
import { AcademicPerformanceComponent } from './academic-performance/academic-performance.component';


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
    CpanelComponent,
    VisionMissionComponent,
    PeoPsoComponent,
    PoComponent,
    SyllabusComponent,
    FacultyMentorsComponent,
    SupervisorsComponent,
    ResearchScholarsComponent,
    PhdComponent,
    ResearchProjectsComponent,
    PatentsComponent,
    PublicationsComponent,
    AchievementsComponent,
    ProfessionalActivitiesComponent,
    PlacementsComponent,
    AcademicPerformanceComponent
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
        path: 'academics',
        component: StudentsComponent
      },
      {
        path: 'laboratory',
        component: LabComponent
      },
      {
        path: 'vision-mission',
        component: VisionMissionComponent
      },
      {
        path:'peo-pso',
        component: PeoPsoComponent
      },
      {
        path:'po',
        component: PoComponent
      },
      {
        path:'syllabus',
        component: SyllabusComponent
      },
      {
        path:'faculty-mentors',
        component: FacultyMentorsComponent
      },
      {
        path:'research-scholars',
        component: ResearchScholarsComponent
      },
      {
        path:'phd',
        component: PhdComponent
      },
      {
        path:'supervisors',
        component: SupervisorsComponent
      },
      {
        path:'research-projects',
        component: ResearchProjectsComponent
      },
      {
        path:'patents',
        component: PatentsComponent
      },
      {
        path:'publications',
        component: PublicationsComponent
      },
      {
        path:'achievements',
        component: AchievementsComponent
      },
      {
        path:'professional-activities',
        component: ProfessionalActivitiesComponent
      },
      {
        path:'placements',
        component: PlacementsComponent
      },
      {
        path:'academic-performance',
        component: AcademicPerformanceComponent
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
