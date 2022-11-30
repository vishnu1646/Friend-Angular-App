import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchfriendComponent } from './searchfriend/searchfriend.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const myRoute:Routes=[{
  path:"",
  component:AddFriendComponent
},
{
  path:"view",
  component:ViewfriendComponent
},
{
  path:"search",
  component:SearchfriendComponent
},
{
  path:"nav",
  component:NavbarComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewfriendComponent,
    NavbarComponent,
    SearchfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
