import { Title } from '@angular/platform-browser';
import { Settings } from '../settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private title: Title ) {}

  ngOnInit() {
    var cssRecource = document.createElement('link');
    var jsRecource = document.createElement('script');
    cssRecource.setAttribute( "rel", "stylesheet");
    cssRecource.setAttribute( "type", "text/css");
    cssRecource.setAttribute( 'href', 'http://shop-ecw.p-trs.ru/static/css/app.0aaac543f5d0eaece591de8bf79fa6ef.css');
    document.head.appendChild(cssRecource);
    cssRecource.onload = function() {
      jsRecource.setAttribute('type', 'text/javascript');
      jsRecource.setAttribute('src', 'http://shop-ecw.p-trs.ru/static/js/app.4998101ac37e484963b7.js');
      document.head.appendChild(jsRecource);
    };
  }
}
