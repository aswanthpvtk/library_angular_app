import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  name=""
  adno=""
  address=""
  pin=""
  dob=""
  email=""
  pno=""
  uname=""
  psw=""
  cpsw=""

  readValues=()=>
  {
    let data:any={"name":this.name,
           "adno":this.adno,
           "address":this.address,
           "pin":this.pin,
           "dob":this.dob,
           "email":this.email,
           "pno":this.pno,
           "uname":this.uname,
           "psw":this.psw,
           "cpsw":this.cpsw}
  
    console.log(data)
  }

}
