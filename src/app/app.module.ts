import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

const myRoute:Routes=[{
  path:"",
  component:AddFriendComponent
},
{
  path:"view",
  component:ViewFriendComponent
},
{
  path:"search",
  component:SearchComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
