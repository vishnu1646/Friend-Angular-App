import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendNickName=""
  DescribeYourFriend=""

  constructor(private api:ApiService){}

  readValues =()=>{
   let data:any={"name":this.name,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
   console.log(data)

   this.api.addfriend(data).subscribe(
    (response:any)=>
  {
    console.log(response)
    if(response.status=="success"){
      alert("Friend is added successfully")
      this.name=""
      this.DescribeYourFriend=""
      this.friendNickName=""
    }
    else{
      alert("Friend Not Added")
    }
  }
   )
  }

}
