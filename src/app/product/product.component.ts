import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    totalProducts!: number;
    productsPerPage: number = 5;
    currentPage: number = 1;

    allProducts:any;
    constructor(private productServe: ProductService) {}
    ngOnInit(): void {
        this.productServe.getAllProducts(this.currentPage, this.productsPerPage).subscribe({
            next: (response) => {
                this.allProducts = response.products;
                this.totalProducts = response.totalProducts;
            },
        });
    }
    watchProp:boolean = false;
    showDetails:Boolean = false;
    
    toggleDetails(productId:number) {
        for (const item of this.allProducts) {
            if(item.id == productId) {
                item.showDetails =! item.showDetails;
            }
        }
    }

    changePage(pageData: PageEvent) {
        this.currentPage = pageData.pageIndex + 1;
        this.productsPerPage = pageData.pageSize;
        this.productServe.getAllProducts(this.currentPage, this.productsPerPage).subscribe({
            next: (response) => {
                this.allProducts = response.products;
                this.totalProducts = response.totalProducts;
            },
        });
    }

}
