import { Component, OnInit } from '@angular/core';
import { RpcService } from '../services/rpc.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [RpcService]
})
export class CatalogComponent implements OnInit {

  constructor( private rpcService: RpcService ) {}

  ngOnInit() {
    this.rpcService.getCategories().subscribe(( response ) => {
      console.log(response);
    });
  }
}
