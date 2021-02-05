import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNoFoundRoutingModule} from './page-no-found-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNoFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
