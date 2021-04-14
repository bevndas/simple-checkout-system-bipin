import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorhandlerService} from 'src/app/core/services';
import {Product} from 'src/app/shared/interface';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product[]> {
  constructor(private productService: ProductService,
              private errorhandlerService: ErrorhandlerService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.productService.getProducts().pipe(
      catchError(err => this.handleError(err))
    );
  }
  private handleError(err: Error): Observable<any> {
    return this.errorhandlerService.routeResolverError(err);
  }
}
