import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {
  handleError(error: Error): void {
    console.log('Error :', error);
  }
  routeResolverError(err: Error): Observable<any> {
    console.log('Error in Resolver', err);
    return of(err);
  }
}
