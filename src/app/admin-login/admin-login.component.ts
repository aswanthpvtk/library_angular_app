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
   
    if ( this.aname=="admin" && this.psw=="12345")
   {
    alert("Valid login")
  } 
  else {
    alert("invalid creditioanals")
  }
  }

  

}
