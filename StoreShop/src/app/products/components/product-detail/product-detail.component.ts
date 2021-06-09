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
      this.fetchProduct(id);
      if(this.producto===null){
         return this.producto=this.productoNoEncontrado;
      }else{ return this.producto; }
    });
  }

  fetchProduct(id:string){
    this.productsService.getById(id)
    .subscribe(product => {
      this.producto = product;
    });
  }

  createProduct(){
    const newProduct: Producto ={
      id:'7',
      image:'assets/images/reloj.jpg',
      title:'Reloj',
      price:1299,
      description:'Reloj, creado desde angular'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  /** Partial<> me permite enviar una parte del objeto */
  updateProduct(){
    const updateProduct: Partial<Producto> ={
      price: 10000,
      description:'modificado con angular'
    };
    this.productsService.updateProduct('7',updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('7')
    .subscribe(respuesta => {
      console.log(respuesta );
    });
  }
} 
