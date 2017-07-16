import { Component } from '@angular/core';
import {NgProgressService} from 'ngx-progressbar';



declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
constructor(public progressService: NgProgressService){
}
  ngOnInit(){
    this.progressService.start();
    setTimeout(()=>
{
  this.progressService.done()
},
3000)
}
}
