import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {CheckoutComponent} from 'src/app/home/components';
import {ScanItemComponent} from 'src/app/home/components';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ScanItemComponent,
    CheckoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: []
})
export class HomeModule {}
