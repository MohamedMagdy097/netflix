import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = "http://localhost:4000/products";

  constructor(private http: HttpClient) { }

  getAllProducts(pageNumber: number, pageSize: number):Observable<any> {
    return this.http.get(`${this.productsUrl}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getMovieById(id: number):Observable<any> {
    return this.http.get(this.productsUrl + "/" + id)
  }
  
}
