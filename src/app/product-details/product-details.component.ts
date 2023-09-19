import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product:any;
    constructor(private route:ActivatedRoute, private prodServe: ProductService) {}
    ngOnInit(): void {
        let id = parseInt(this.route.snapshot.paramMap.get('id')!);
        this.prodServe.getMovieById(id).subscribe({
            next: (response) => {
                this.product = response;
                console.log(response.rating);
            },
        });
    }
}

