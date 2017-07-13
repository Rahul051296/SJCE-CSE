import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 12.8702423;
  lng: number = 80.2167096;
  zoom:number = 17;
  constructor() { }

  ngOnInit() {
  }

}
