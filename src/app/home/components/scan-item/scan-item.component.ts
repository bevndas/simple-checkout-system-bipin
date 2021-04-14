import {Component, Input, OnInit} from '@angular/core';
import {AppStateService} from 'src/app/core/services';
import {Product} from 'src/app/shared/interface';


@Component({
  selector: 'app-scan-item',
  templateUrl: './scan-item.component.html',
  styleUrls: ['./scan-item.component.scss']
})
export class ScanItemComponent implements OnInit {
  @Input() products: Product[];
  constructor(private appStateService: AppStateService) {
  }
  ngOnInit(): void {
  }
  onProductSelected(productCode: string): void {
    this.appStateService.setCheckoutItem(productCode);
  }
}
