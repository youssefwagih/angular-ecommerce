import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8081/api/catalogs/test';

  constructor(private httpClient: HttpClient) {console.log("ssss") }

  getProductList(): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl).pipe(
      map(response => response)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
