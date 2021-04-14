import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/operators';
import {AppStateService} from 'src/app/core/services';
import {ErrorhandlerService} from 'src/app/core/services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  private subscriptionState = true;
  checkoutListItem = [];
  total = 0;
  activeAppleOffer;
  activeOrangeOffer;
  constructor(private appStateService: AppStateService,
              private errorhandlerService: ErrorhandlerService) { }

  ngOnInit(): void {
    this.initializeProductPriceLogic();
    this.syncScannedItems();
  }
  private initializeProductPriceLogic(): void {
    this.activeAppleOffer = this.normalAppleTotal;
    this.activeOrangeOffer = this.normalOrangeTotal;
  }
  private syncScannedItems(): void {
    this.appStateService.$checkoutData.pipe(
      takeWhile(() => this.subscriptionState)
    ).subscribe(
      (itemCode: string) => {
        this.checkoutListItem.push(itemCode);
        this.updateCheckout();
      },
      err => this.handleError(err)
    );
  }
  private updateCheckout(): void {
    this.total = +(this._calculateAppleTotal(this.activeAppleOffer) + this._calculateOrangeTotal(this.activeOrangeOffer)).toFixed(2);
  }
  private _calculateAppleTotal(calcTotalFn: (x: number) => number): number {
    const numberOfApples = this.checkoutListItem.filter(item => item === 'A').length;
    return calcTotalFn(numberOfApples);
  }
  private _calculateOrangeTotal(calcTotalFn: (x: number) => number): number {
    const numberOfOranges = this.checkoutListItem.filter(item => item === 'O').length;
    return calcTotalFn(numberOfOranges);
  }
  private normalAppleTotal(noOfApple: number): number {
    const NORMAL_PRICE_OF_APPLE = 0.6;
    return noOfApple * NORMAL_PRICE_OF_APPLE;
  }
  private normalOrangeTotal(noOfOrange: number): number {
    const NORMAL_PRICE_OF_ORANGE = 0.25;
    return noOfOrange * NORMAL_PRICE_OF_ORANGE;
  }
  onBuyOneGetOneFreeOfferApple(event): void {
    if (!event.target.checked) {
      this.activeAppleOffer = this.normalAppleTotal;
    } else {
      this.activeAppleOffer = this.offerBuyOneGetOneFreeAppleOfferTotal;
    }
    this.updateCheckout();
  }
  getThreeForPriceOfTwoOranges(event): void {
    if (!event.target.checked) {
      this.activeOrangeOffer = this.normalOrangeTotal;
    } else {
      this.activeOrangeOffer = this.offerGetThreeForPriceOfTwoOrangesTotal;
    }
    this.updateCheckout();
  }
  private offerBuyOneGetOneFreeAppleOfferTotal(noOfApples: number): number {
    const price = 0.6;
    return (noOfApples / 2) * price;
  }
  private offerGetThreeForPriceOfTwoOrangesTotal(noOfOranges: number): number {
    const price = 0.25;
    return (noOfOranges / 3) * 2 * price;
  }
  ngOnDestroy(): void {
    this.subscriptionState = false;
  }
  private  handleError(err: Error): void {
    this.errorhandlerService.handleError(err);
  }
}
