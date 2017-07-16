import { Component, OnInit } from '@angular/core';

declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function()
  {

      var scroll_start = 0;
      var startchange = $('#title');
      var offset = startchange.offset();

$(document).scroll(function()
  {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top)
          {
              $('.navbar-custom').css('background-color', 'rgba(255, 255, 255,0.98)');
              $('.navbar-custom').css('box-shadow','0px 0px 8px 0px #010101');
              $('.navbar-custom').css('padding-bottom','10px');
              $('.navbar-custom ul>li>a').css('color','#000');
              $('.navbar-title').css('color','rgba(0,0,0,0.8)');
              $('.nav-icon').css('color','#000');
              if (window.matchMedia('(max-width: 767px)').matches) {
              $('#bs-example-navbar-collapse-1 ul> li > a').css('color','#000');
            }
           }
       else
           {
               $('.navbar-custom').css('background-color', 'rgba(0, 0, 0, 0)');
               $('.navbar-custom ul>li>a').css('color','#fff');
               $('.navbar-title').css('color','#fff');
               $('.navbar-custom').css('box-shadow','0px 0px 0px 0px #000');
               $('.nav-icon').css('color','#fff');
               if (window.matchMedia('(max-width: 767px)').matches) {
               $('#bs-example-navbar-collapse-1 ul> li > a').css('color','#000');
             }

          }
  });
  });
  }

}
