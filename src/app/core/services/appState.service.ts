import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private checkoutData = new Subject<string>();
  $checkoutData = this.checkoutData.asObservable();
  setCheckoutItem(state: string): void  {
    this.checkoutData.next(state);
  }
}
