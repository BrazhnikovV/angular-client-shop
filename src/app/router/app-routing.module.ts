import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import {ProductsComponent} from '../products/products.component';

/**
 *  @access public
 *  @var routes: Routes - набор маршрутов приложения
 */
const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: '', component: ProductsComponent },
      { path: 'products/:id', component: ProductsComponent }
    ]
  }
];

/**
 * @class - AppRoutingModule
 * @classdesc - модуль управления маршрутизацией
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
