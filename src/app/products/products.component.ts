import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';
import { ActivatedRoute } from '@angular/router';

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

  /**
   * constructor - конструктор
   * @param rpcService
   */
  constructor( private rpcService: RpcService, private ar: ActivatedRoute ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.updateProducts(params);
    });
  }

  /**
   * updateProducts - обновить продукты
   * @param params
   * @return void
   */
  private updateProducts ( params ) {

    if ( this.isEmpty( params ) ) {
      this.rpcService.getProducts().subscribe(( response ) => {
        this.products = response;
      });
    } else {
      const id = this.ar.snapshot.params.id;
      this.rpcService.getProductsByCategoryId( id ).subscribe(( response ) => {
        this.products = response;
      });
    }
  }

  /**
   * isEmpty - проверить пустой ли объект
   * @param obj
   */
  private isEmpty( obj ): boolean {
    for ( const key in obj ) {
      return false;
    }
    return true;
  }
}
