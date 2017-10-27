import { Component, OnInit } from '@angular/core';
import { FacultyDetailsService } from '../faculty-details.service';
import {NgProgressService} from 'ngx-progressbar';
import { Http } from '@angular/http';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculty:any;
  facultyDetails: any;
  photoUrl: any;
  constructor(private facultyService: FacultyDetailsService, public progressService: NgProgressService, public http: Http) { }

  ngOnInit() {
    this.getAllStaff();
  }

  getAllStaff(){
   this.facultyService.getAllStaff().subscribe(response => {
       this.faculty = response;
       this.photoUrl = response.photopath;
       this.progressService.done();
       console.log(this.faculty);
   });
}

}
