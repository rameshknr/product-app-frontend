import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(public productService:ProductService, private router: Router) { }

  deleteProduct(index: number){
    this.productService.deleteProduct(index)
    .subscribe(res => res)
    this.router.navigate(['']);
    this.ngOnInit();
  }
  addButton(){
    this.router.navigate(['add']);
  }

  setProductId(index:number){
    this.productService.setProductId(index);
  }


  ngOnInit(): void {
    this.productService.fetchAllProducts()
    .subscribe((res:any)=>
      {
        this.productService.product = res;
      })
  }

}
