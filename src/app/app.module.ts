import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBookComponent } from './view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
