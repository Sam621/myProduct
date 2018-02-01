import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/app.product';
import * as $ from 'jquery';
import { ProductService } from './product.service';


@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageTitle: string;
  imageWidth: Number = 50;
  imageHeight: Number = 40;
  imageMargin: Number = 2;
  _listFilter: string;

  filteredProduct: IProduct[];
  selectedProduct: IProduct;
  products: IProduct[];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor( private productService: ProductService) {
    // this.SetSelectedProduct();
    this.pageTitle = 'My Product';
    this.products = this.productService.getProductList();
    this.filteredProduct = this.products;
  }
  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  SetSelectedProduct() {
    this.selectedProduct = {
        name: 'test name',
        price: 100,
        image: 'https://openclipart.org/download/151093/1311346812.svg',
        rating: 19
    };
  }

  ShowProduct(product: IProduct) {
    this.selectedProduct = {
      name: product.name,
      price: product.price,
      image: product.image,
      rating: product.rating
    };
    // $('#myModal').show();
    // alert($('#modalProductDetails'));
  }
  ngOnInit(): void {
    console.log('in onIit');
  }

  OnRateClicked(message: string): void {
    this.pageTitle = 'My Products: ' + message;
  }
}



