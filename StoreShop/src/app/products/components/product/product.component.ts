import { Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit, 
  SimpleChange, 
  SimpleChanges,
  OnDestroy,
  DoCheck } from '@angular/core';
import {Producto} from '../../../producto.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements /*OnChanges,*/OnInit,DoCheck,OnDestroy{
 
  @Input() p!: Producto; //el simbolo ! es para evitar el error de no Inicializacion de variable
  /* El Output y EventEmitter me permite comunicarme con el componente padre
  en el html del componente padre, se coloca entre parentesis*/
  @Output() productClicked:EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log("1. constructor");
  }
  //Se ejecuta cada vez que hay cambios en el Input
  /*ngOnChanges(changes:SimpleChanges){ console.log('2. ngOnChanges');
  console.log(changes);
}*/

/*Se ejecuta una vez, cuando el componente esta en pantalla.
  Es buena practica, llamar servicios de datos aqui*/
ngOnInit(){ console.log('3. OnInit');}
ngDoCheck(){console.log('4. DoCheck');}
ngOnDestroy(){console.log('5. OnDestroy');}



  addCart(){
    console.log('anadir al carrito');
    this.productClicked.emit(this.p.id);
  }
}
