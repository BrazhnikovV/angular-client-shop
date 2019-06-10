import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

/**
 * @class - CatalogComponent
 * @classdesc - компонент каталог товаров
 */
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [RpcService]
})
export class CatalogComponent implements OnInit {

  /**
   *  @access private
   *  @var catalog: Category -
   */
  private catalog;

  /**
   * constructor - конструктор
   * @param rpcService
   */
  constructor( private rpcService: RpcService ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.getCategories().subscribe(( response ) => {
      this.catalog = response;
    });
  }
}
