import { Component } from '@angular/core';

/**
 * @class - AppComponent
 * @classdesc - компонент приложение
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *  @access public
   *  @var title: string - титульник приложения
   */
  public title: string = 'angular-client-shop';
}
