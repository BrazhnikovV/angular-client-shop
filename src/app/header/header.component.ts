import { Title } from '@angular/platform-browser';
import { Settings } from '../settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private title: Title ) {}

  ngOnInit() {
    this.title.setTitle( 'Главная :: ' + Settings.title );
  }

}
