import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms'

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent} from './components/cart/cart.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
