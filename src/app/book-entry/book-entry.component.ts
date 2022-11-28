import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  image=""
  title=""
  auther=""
  dis=""
  publisher=""
  language=""
  distributer=""
  ryear=""
  price=""



  readValues=()=>
  {
    let data:any={"image":this.image,"title":this.title,"auther":this.auther,"dis":this.dis,"publisher":this.publisher,"language":this.language,"distributer":this.distributer,"ryear":this.ryear,"price":this.price}
    console.log(data)
  }

}
