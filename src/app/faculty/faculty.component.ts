import { Component, OnInit } from '@angular/core';
import { FacultyDetailsService } from '../faculty-details.service';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculty:any;
  facultyDetails: any;
  constructor(private facultyService: FacultyDetailsService) { }

  ngOnInit() {
    this.getAllStaff();
  }

  getAllStaff(){
   this.facultyService.getAllStaff().subscribe(response => {
       this.faculty = response;
   });
}
  getStaff(id){
   this.facultyService.getStaff(id).subscribe(response => {
       this.facultyDetails = response[0];
       console.log(this.facultyDetails);
   });
}

}
