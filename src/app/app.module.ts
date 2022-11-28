import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const myroute:Routes =[

  {
    path :"",
    component :AdminLoginComponent
  },
  {
    path :"reg",
    component : UserRegComponent
  },
  {
    path :"log",
    component : UserLoginComponent
  },
  {
    path :"add",
    component : BookEntryComponent
  },
  {
    path :"search",
    component : SearchBookComponent
  },
  {
    path :"edit",
    component : EditBookComponent
  },
  {
    path :"delete",
    component : DeleteBookComponent
  },
  {
    path :"issue",
    component : IssueBookComponent
  },
  {
    path :"view",
    component : ViewBookComponent
  },
  {
    path :"ulog",
    component : UserLoginComponent
  },
  {
    path :"ureg",
    component : UserRegComponent
  },
  {
    path :"",
    component : AdminLoginComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewBookComponent,
    SearchBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    IssueBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
