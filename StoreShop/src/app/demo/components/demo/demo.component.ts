import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'StoreShop';
  nombres = ['nicolas','maria','jose','diego'];
  power = 10;

  

  addItem(){
    this.nombres.push('nuevo item');
  }

  deleteItem(index:number){
    this.nombres.splice(index,1); 
  }
}
