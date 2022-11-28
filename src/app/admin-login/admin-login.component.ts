import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  aname=""
  psw=""


  readValues=()=>
  {
    let data:any={"aname":this.aname,"psw":this.psw}
    console.log(data)
  }

}
