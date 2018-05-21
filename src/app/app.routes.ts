import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { AddOrEditProductComponent } from './pages/add-or-edit-product/add-or-edit-product.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'add-new-product', component: AddOrEditProductComponent },
    { path: 'edit-product', component: AddOrEditProductComponent },
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit-product', component: AddOrEditProductComponent },

  // { path: 'account-settings', component: AccountSettingsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutes { }