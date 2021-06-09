import { Injectable } from '@angular/core';
import { Producto } from './../../../producto.model';
import { BehaviorSubject } from 'rxjs'  // Anade principios reactivos en angular

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productos:Producto[] = [];
  private cart = new BehaviorSubject<Producto[]>([]);

  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(producto: Producto) {
    // Cada vez se crea un referencia al arreglo. Nuevo estado del arreglo
    this.productos = [...this.productos,producto];
    this.cart.next(this.productos);
  }
}
