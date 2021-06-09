import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Producto } from './../../../producto.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  //Encabezado (columnas)
  columnsToDisplay = ['id','title','price','actions'];
  
  productsList:Producto[]=[];
  constructor(private producstService:ProductsService) { }
 
  ngOnInit(): void {
    this.fetchProducts();
  }
 
  fetchProducts(){
    // Con datos estaticos cuando no tengo acceso a internet
    this.productsList = this.producstService.getAllProductsStatic()
    // Con internet
    /*
     this.producstService.getAllProducts()
     .subscribe(productos =>{
       this.productsList=productos;
     });*/
  }

  deleteProduct(id:string){
    this.producstService.deleteProduct(id).subscribe(respuesta=>{
      console.log('deleteProducts de ProductsListComponent',respuesta);
      this.fetchProducts();
    });
  }
}
