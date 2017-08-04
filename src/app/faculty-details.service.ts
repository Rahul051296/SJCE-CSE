import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FacultyDetailsService {
      http: any;
      baseUrl: String;
  constructor(http: Http) {
      this.http = http;
      this.baseUrl = 'https://kernalsjce17.000webhostapp.com/';
  }
  getAllStaff() {
   return this.http.get(this.baseUrl+'getallstaff.php')
   .map(res => res.json());
}
  getStaff(id) {
   return this.http.get(this.baseUrl+'getstaff.php?id='+id)
   .map(res => res.json());
}
}
