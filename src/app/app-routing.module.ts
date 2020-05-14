import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
//  import { DetailsComponent } from './details/details.component';
//import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
//  { path: '', redirectTo: 'vendor', pathMatch: 'full' },
// {path: 'login', component: LoginComponent},
{path: '', component: LoginComponent},
{ path: 'vendors', component: VendorListComponent },
{ path: 'add', component: VendorFormComponent },
{ path: 'edit/:id', component: VendorFormComponent },
{ path: 'products', component:ProductDetailsComponent }
// {path:'vendors/details',component:DetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
