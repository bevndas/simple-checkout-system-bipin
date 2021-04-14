import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from 'src/app/shared/interface';
import {products} from 'src/app/home/data';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData = products;
  getProducts(): Observable<Product[]> {
    return of(this.productData);
  }
}
