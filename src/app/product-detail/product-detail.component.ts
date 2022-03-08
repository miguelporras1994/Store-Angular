import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../product.model';



import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {} as Product;
  constructor( 
     private route: ActivatedRoute,
     private productsService: ProductService)
     { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
       const id = params['id'];
      this.product = this.productsService.getProduct(id)!;
  
  
    });
  }
  

}
