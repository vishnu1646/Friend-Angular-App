import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriend',
  templateUrl: './viewfriend.component.html',
  styleUrls: ['./viewfriend.component.css']
})
export class ViewfriendComponent {
constructor(private api:ApiService){
  api.fetchFriend().subscribe(
    (response)=>
    {
      this.friends =response;
    }
  )
}

  friends:any=[]
}

