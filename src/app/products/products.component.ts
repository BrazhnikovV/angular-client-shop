import { Component, OnInit } from '@angular/core';

/**
 * @class - ProductsComponent
 * @classdesc - компонент товары
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /**
   *  @access private
   *  @var catalog: Category -
   */
  private products: [];

  constructor() {}

  ngOnInit() {}
}
