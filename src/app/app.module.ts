import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
// import { RegisterComponent } from './auth/register/register.component';
// import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookComponent,
    CartComponent,
    // LoginComponent,
    // RegisterComponent
  ],

  entryComponents: [CartComponent],

  imports: [
    // CommonModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    AuthModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
