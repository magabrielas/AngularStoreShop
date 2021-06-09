import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ProductsService } from  './../../../core/services/products/products.service'
import { Producto } from './../../../producto.model';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private productsService:ProductsService,
    private router:Router
    ) {
    this.buildForm();
   }
  
  
  //ngOnInit para llamar datos al inicio del componente
  ngOnInit(): void {
  }

  private buildForm(){
    // group es para el grupo de control,inicializando y validando
    // item1:estado inicial, item2: (un array) coleccion de validaciones
    this.formGroup = this.formBuilder.group({
      id:['', [Validators.required]],
      title:['',[Validators.required]],
      price:['',[Validators.required,MyValidators.isPriceValid]],
      image:[''],
      description:['',[Validators.required]]
    });
  }



  savedProduct(event:Event){
    //event.preventDefault(): Buena practica para prevenir que el form no envie los datos y recargue la pagina
    event.preventDefault();
    if(this.formGroup.valid){
      const producto:Producto = this.formGroup.value;
      this.productsService.createProduct(producto)
      .subscribe(productoCreado=>{
        console.log(productoCreado);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.formGroup.value);
  }

  // Para evitar llamar una variable repetidas veces, usar el get nativo de typescript o javascript
  get priceField(){
    return this.formGroup.get('price');
  }

}
