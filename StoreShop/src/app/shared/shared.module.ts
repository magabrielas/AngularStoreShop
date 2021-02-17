import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
