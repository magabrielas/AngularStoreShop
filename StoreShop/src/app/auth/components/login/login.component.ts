import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  iconUser:string = "./../../../assets/images/icon-user.png";
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    if(this.formGroup.valid){
      const value = this.formGroup.value;
      this.authService.login(value.email,value.password)
        .then(() => {
          this.router.navigate(['./admin']);
        });
    }
  }

  loginApi(){
    const value = this.formGroup.value;
    this.authService.loginRestApi(value.email,value.password)
      .subscribe(data => {
        console.log('data', data);
      });
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
}
