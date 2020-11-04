import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public productService:ProductService, private router: Router) { }

  addProduct(productName: string,productType: string,expiryDate: string,price: string){
    this.productService.addProduct({productName,productType,expiryDate,price})
    .subscribe(res=>res)
    this.router.navigate(['']);
    this.ngOnInit();
  }

  returnHome(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.productService.fetchAllProducts()
    .subscribe((res:any)=>
      {
        this.productService.product = res;
      })
  }

}
