import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total = 0;
  
  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(productosTotales =>{
      console.log('Producto agregado al cart', productosTotales);
      this.total = productosTotales.length;
    })
   }

  ngOnInit(): void {
  }

}
