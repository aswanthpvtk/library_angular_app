import { Component } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  books:any=[
     {
      "image":"https://m.media-amazon.com/images/I/51V0LIgapNL.jpg",
      "title":"Playing it my way",
      "auther":"Sachin tendulker",
      "dis":"Autobiography of Sachin"
      
     },
     {
      "image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588286863l/634583._SY475_.jpg",
      "title":"Wings of fire",
      "auther":"Apj abdul kalaam",
      "dis":"Autobiography of kalaam"
      
     },
     {
      "image":"https://m.media-amazon.com/images/I/5189TuB41eL.jpg",
      "title":"Sunny days",
      "auther":"Sunil gavasker",
      "dis":"Autobiography of Sunil gavasker"
      
     },
     {
      "image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356763056l/1738852.jpg",
      "title":"Ente kadha",
      "auther":"Kamala suraya",
      "dis":"Autobiography of First published January 1, 1973"
      
     },
     {
      "image":"https://rukminim1.flixcart.com/image/416/416/regionalbooks/m/d/x/mein-kampf-original-imaes6wfa9ggpy8e.jpeg?q=70",
      "title":"Main Campf",
      "auther":"Adolf hitler",
      "dis":"published in 1925"
      
     },
     {
      "image":"https://dcbookstore.com/uploads/product/images/bk_9764.jpg",
      "title":"Oolavum theeravum",
      "auther":"M T vasudevan nair",
      "dis":"Anthology of short stories in 1957"
      
     },
     {
      "image":"https://rukminim1.flixcart.com/image/612/612/km3s1ow0/book/c/t/i/naalukettu-original-imagf3fgfztebnqx.jpeg?q=70",
      "title":"Naalu kettu",
      "auther":"M T vasudevan nair",
      "dis":"published in 1958"
      
     },
     {
      "image":"https://m.media-amazon.com/images/I/71xcjMZXAuL.jpg",
      "title":"Vaaranasi",
      "auther":"M T vasudevan nair",
      "dis":"published in 2002"
      
     },
     {
      "image":"https://img-mm.manoramaonline.com/content/dam/mm/mo/literature/bookreview/images/2020/1/27/kaalam-potrait.gif",
      "title":"Kaalam",
      "auther":"M T vasudevan nair",
      "dis":"published in 1969"
      
     },
     {
      "image":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1365719520l/17792370.jpg",
      "title":"Randamoozham",
      "auther":"M T vasudevan nair",
      "dis":"published in 1983"
      
     }


  ]
}
