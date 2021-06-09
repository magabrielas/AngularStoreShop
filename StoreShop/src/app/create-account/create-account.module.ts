import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from './../material/material.module';

import { CreateAccountComponent } from './components/create-account.component';



@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CreateAccountModule { }
