import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent} from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component'
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

/*Vista anidada segun el componente que se quiera como
padre, colocando un array llamado children*/
const routes: Routes = [
 
  {path:'',component: NavComponent,
  children:[
    {
      path:'create',component:ProductFormComponent,
    },
    {
      path:'creates',component:FormProductComponent,
    },
    {
      path:'',component:DashboardComponent,
    },
    {
      path:'dashboard',component:DashboardComponent,
    },
    {
      path:'stock',component:InventoryTableComponent,
    },
    {
      path:'products',component:ProductsListComponent,
    },
    {
      path:'product-edit/:id',component:ProductEditComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
