import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutes } from './app.routes';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AddOrEditProductComponent } from './pages/add-or-edit-product/add-or-edit-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    AddOrEditProductComponent,
    ProductDetailsComponent,
    RegisterComponent,
    ViewProductComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
