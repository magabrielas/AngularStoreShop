import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      userId:['',[]],
      name:['',[]],
      password:['',[]],
      confirmPassword:['',[]]
    });
  }

}
