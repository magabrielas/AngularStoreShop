import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event){
    event.preventDefault();
    if(this.formGroup.valid){
      const value = this.formGroup.value;
      this.authService.createUser(value.email,value.password)
        .then(() => {
          this.router.navigate(['./auth/login']);
        });
    }
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      email:['',[Validators.email]],
      name:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    });
  }

}
