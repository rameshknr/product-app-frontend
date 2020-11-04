import { Injectable } from '@angular/core';
import { product } from './view-product/product';
import { HttpClient } from '@angular/common/http';

const baseUrl: string = 'http://localhost:8000/api/product/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public id:number;

  public product: Array<product> = [ ]
  constructor(public httpClient: HttpClient) { }

  addProduct(product: product){
    return this.httpClient.post(baseUrl,product )
  }

  setProductId(index:number){
    this.id = index;
  }
  getProductId(){
    return this.id
  }

  deleteProduct(index: number){
    return this.httpClient.delete(baseUrl + index)
  }
  editProduct(index:number,productName: string,productType: string,expiryDate: string,price: string){
    let id = index
    console.log(id,productName,productType,expiryDate,price);
    return this.httpClient.put(baseUrl, {id,productName,productType,expiryDate,price})
  }

  fetchAllProducts(){
    return this.httpClient.get(baseUrl);
  }
}
