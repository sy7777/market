import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/components/login/login.component';
import { RegisterComponent } from '@app/components/register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"mall", pathMatch:"full"},
  {path:"mall", loadChildren:()=>import("./customer/customer.module").then(m=>m.CustomerModule)},
  {path:"admin", loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  { path: '**', redirectTo: 'mall' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
