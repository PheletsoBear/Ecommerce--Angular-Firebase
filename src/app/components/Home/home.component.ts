import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interface/Products.Interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
    Products : Array<Product> = [

        {Name : 'Banana' , Price : 3, Desc : 'Fruit', ProductPath : 'assets/Pics/Banana.png' },
        {Name : 'Kiwi' , Price : 3, Desc : 'Fruit', ProductPath : 'assets/Pics/kiwi.jpeg' },
        {Name : 'Orange' , Price : 3, Desc : 'Fruit', ProductPath : 'assets/Pics/orange.jpeg' },
        {Name : 'Strawberry' , Price : 3, Desc : 'Fruit', ProductPath : 'assets/Pics/strawberry.jpeg' },
               

    ]



  constructor(){}
  
  ngOnInit(){
    
  }

  AddToCart(index:any){
     console.log("added",this.Products[index])  
  }





  

}
