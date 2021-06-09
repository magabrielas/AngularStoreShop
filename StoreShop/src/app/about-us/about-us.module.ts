import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SharedModule } from './../shared/shared.module';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
  ]
})
export class AboutUsModule { }
