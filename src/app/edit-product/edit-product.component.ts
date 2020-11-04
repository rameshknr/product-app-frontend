import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from '../view-product/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(public productService:ProductService, private router: Router, private route: ActivatedRoute) { }
  product: product;

  editProduct(productName: string,productType: string,expiryDate: string,price: string){   
    const index:number = this.productService.getProductId();
    this.productService.editProduct(index,productName,productType,expiryDate,price)
    .subscribe(res=> res)
    this.router.navigate(['']);
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

      this.route.paramMap.subscribe(params => {
        let perName = params.get('name');
        let filteredList = this.productService.product.filter(per => per.productName == perName);
        this.product = filteredList[0];
      });
  }

}
