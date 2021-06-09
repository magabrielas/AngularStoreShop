import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import {Producto} from '../../../producto.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Producto[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id:number){
    console.log('product id',id);
  }

  fetchProducts(){
    // Datos estaticos
    this.products = this.productsService.getAllProductsStatic();
    // Datos dinamicos
    /*this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });*/
  }
}  
 