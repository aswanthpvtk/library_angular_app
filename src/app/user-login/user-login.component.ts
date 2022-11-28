import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {


  uname=""
  psw=""


  readValues=()=>
  {
    let data:any={"uname":this.uname,"psw":this.psw}
    console.log(data)
  }

}
