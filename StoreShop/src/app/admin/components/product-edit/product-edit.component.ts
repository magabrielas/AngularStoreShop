import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ProductsService } from  './../../../core/services/products/products.service'
import { Producto } from './../../../producto.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  formGroup: FormGroup;
  id:string;
  constructor(
    private formBuilder:FormBuilder,
    private productsService:ProductsService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {
    this.buildForm();
   }
  
  
  //ngOnInit para llamar datos al inicio del componente
  // ActivatedRoute: para obtener el ID desde la ruta
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) =>{
      this.id = params.id;
      // Con datos Estaticos
      this.formGroup.patchValue(this.productsService.getByIdStatic(this.id));
      // Dinamicamente
      /*
      this.productsService.getById(this.id)
      .subscribe(product => {
        this.formGroup.patchValue(product); 
        // como el objeto de form coincide con el modelo del producto,
        // se pasa el objeto completo, sino seria
        // {id:product.id, price:product.price}
      })*/
    })
  }

  private buildForm(){
    // group es para el grupo de control,inicializando y validando
    // item1:estado inicial, item2: (un array) coleccion de validaciones
    this.formGroup = this.formBuilder.group({
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
      this.productsService.updateProduct(this.id,producto)
      .subscribe(productoModificado=>{
        console.log(productoModificado);
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
