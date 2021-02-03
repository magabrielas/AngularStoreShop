import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DemoModule { }
