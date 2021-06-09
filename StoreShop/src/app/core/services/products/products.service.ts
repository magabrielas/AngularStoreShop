import { Injectable } from '@angular/core';
import {Producto} from '../../../producto.model';
import { HttpClient } from '@angular/common/http';
import { environment} from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  /* Usar variable de ambiente de angular para en el futuro
     modificar las url de forma mas facil. se agrega en la 
     carpeta environment, luego se importa */
  getById(id:string){
    return this.http.get<Producto>(`${environment.url_api}/products/${id}`);
  }

  getAllProducts (){
    return this.http.get<Producto[]>(`${environment.url_api}/products/`);
  }
  //POST
  createProduct(product:Producto){
    return this.http.post(`${environment.url_api}/products`,product);
  }

  deleteProduct(id:string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }

  /*Partial<> me permite enviar solo los atributos que fueron 
    modificados y no todo el objeto*/
  updateProduct(id:string, changes:Partial<Producto>){
    return this.http.put(`${environment.url_api}/products/${id}`,changes);
  }

  /* --------------- CON DATOS ESTATICOS ------------- */

  
/*
  updateProductStatic(id:string, changes:Partial<Producto>){
    return this.productos
    }*/

  productos : Producto[] = [ 
    {
      id:'1',
      image:'assets/images/mafaldaMate.jpg',
      title:'Mate Mafalda',
      price:1000,
      description:'Mate de Mafalda'
    },
    {
      id:'2',
      image:'assets/images/ojotas.jpg',
      title:'Ojotas',
      price:599,
      description:'talla 35/36'
    },
    {
      id:'3',
      image:'assets/images/reloj.jpg',
      title:'Reloj',
      price:1299,
      description:'Reloj'
    },
    {
      id:'4',
      image:'assets/images/agenda.jpg',
      title:'Agenda 2021',
      price:1299,
      description:'Mafalda Agenda'
    }
  ];

  getAllProductsStatic (){
    return this.productos;
  }

  getByIdStatic(id:string){
    return this.productos.find(item=>id===item.id);
  }

}
