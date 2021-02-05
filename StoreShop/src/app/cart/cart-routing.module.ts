import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule,Routes} from '@angular/router'


const routes: Routes =[
  {path:'', component:CartComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CartRoutingModule { }
