import { Component, OnInit } from '@angular/core';
import { FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //tipando datos
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    //Escuchando(dinamicamente) los cambios en el campo
    /*this.emailField.valueChanges.subscribe( value =>{
      console.log(value);
    });*/
   }

  ngOnInit(): void {
  }

  sendMail(){
    if(this.emailField.valid){
      console.log(this.emailField.value);
    }
  }

}
