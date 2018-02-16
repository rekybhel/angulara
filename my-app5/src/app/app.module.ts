import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { ForgetpassComponent } from './forgetpass.component';
import { ResetpassComponent } from './resetpass.component';
import { AddpropertyComponent } from './addproperty.component';
import { AdduserComponent } from './adduser.component';
import { EdituserComponent } from './edituser.component';
import { DeleteuserComponent } from './deleteuser.component';
import { UserlistComponent } from './userlist.component';
import { Routes, RouterModule,ActivatedRoute } from "@angular/router";
import { HeadercommanComponent } from './header/headercomman.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AlertService, AuthenticationService, UserService,HttpInterceptorService,PropertyService } from './service/index';
import { CommonModule } from "@angular/common";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm.component';
import { PasswordresetComponent } from './passwordreset.component';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AddproductsComponent } from './addproducts.component';
import { AddcategoryComponent } from './addcategory.component';

const routes: Routes = [
  { path: 'admin', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AdduserComponent },
  { path: 'addproperty', component: AddpropertyComponent },
  { path: 'resetpassword/:id', component: PasswordresetComponent },
  { path: 'edit/:id', component: EdituserComponent },
  { path: 'delete/:id', component: DeleteuserComponent },
  { path: 'view', component: UserlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fgtpass', component: ForgetpassComponent },
  { path: 'reset', component: ResetpassComponent },
  { path: 'addproducts', component: AddproductsComponent },
  { path: 'addcategory', component: AddcategoryComponent },
];

@NgModule({
  declarations: [
        AppComponent,
	HomeComponent,
	AdduserComponent,
	AddpropertyComponent,
        EdituserComponent,
        DeleteuserComponent,
	UserlistComponent,
	HeadercommanComponent,
	HeaderComponent,
	FooterComponent,  
        LoginComponent,
        RegisterComponent,
        ForgetpassComponent,
        ResetpassComponent,
        ConfirmComponent,
        PasswordresetComponent,
        AddproductsComponent,
        AddcategoryComponent       
  ],
 imports: [
    BrowserModule,AppBootstrapModule, CommonModule, BootstrapModalModule, HttpModule ,FormsModule,ReactiveFormsModule,NgxPaginationModule, FlashMessagesModule, RouterModule.forRoot(routes, { useHash: true }) 
  ], 

   entryComponents: [
        ConfirmComponent
      ],
  providers: [  AlertService, AuthenticationService, UserService,PropertyService,Location,HttpInterceptorService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
