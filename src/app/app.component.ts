import { Component } from '@angular/core';
declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  ngOnInit(){
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
              $('.navbar-default').css('background-color', 'rgb(255, 255, 255)');
              $('.navbar-default').css('box-shadow','0px 0px 8px 0px #010101');
              $('.navbar-default').css('padding-bottom','10px');
              $('.navbar-default ul>li>a').css('color','#000');
              $('.navbar-brand').css('color','rgba(0,0,0,0.8)');
              $('.fa-bars').css('color','#000');
           }
       else
           {
               $('.navbar-default').css('background-color', 'rgba(12, 19, 12, 0)');
               $('.navbar-default ul>li>a').css('color','#fff');
               $('.navbar-brand').css('color','#fff');
               $('.navbar-default').css('box-shadow','0px 0px 0px 0px #000');
               $('.fa-bars').css('color','#fff');
          }
  });
  });

  }

}
