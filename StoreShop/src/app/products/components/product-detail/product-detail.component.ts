import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products/products.service';
import {Producto} from '../../../producto.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  producto?:Producto;
  productoNoEncontrado:Producto={
    id:'0',
    image:'assets/images/nofound.png',
    title:'N/A',
    price:0,
    description:'N/A'};
  constructor(private route:ActivatedRoute,
              private productsService: ProductsService) { }
  /*subscribe escucha los cambios en los parametros*/
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id = params.id;
      this.producto = this.productsService.getById(id);
      if(this.producto===undefined){
         return this.producto=this.productoNoEncontrado;
      }else{ return this.producto; }
    });
  }
}
