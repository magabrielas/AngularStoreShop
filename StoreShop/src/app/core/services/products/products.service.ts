import { Injectable } from '@angular/core';
import {Producto} from '../../../producto.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getById(id:string){
    return this.productos.find(item=>id===item.id);
  }

  getAllProducts (){
    return this.productos;
  }

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

}
