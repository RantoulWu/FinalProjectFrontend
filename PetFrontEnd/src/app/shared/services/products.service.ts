import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import env from '../../../environments/environment';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// 1. use @Injectable decorator
// 2. add into provider[] in module.js
// before angular 6
@Injectable()
export class ProductsService{
  products;
  // before angular 4.3 called HttpClientService is called Http service
  constructor(private httpClient: HttpClient) {
  }
  getProduct(id: number): Observable<Product>{
    // environment.API_UR L= 'http://localhost:8080',
    return this.httpClient.get<Product>(`${environment.API_URL}/petproducts/${id}`);
  }
  getProducts(): Observable<Product[]>{
    // toPromise() convert to promise
    const getUrl = environment.API_URL;
    // return this.httpClient.get<Product[]>(`${environment.API_URL}/petproducts`);
    return this.httpClient.get<Product[]>('http://localhost:8080/petproducts');
  }

}
