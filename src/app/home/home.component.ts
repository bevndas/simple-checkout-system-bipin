import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'src/app/shared/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];
  constructor(private activateRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.activateRoutes.snapshot.data[`products`];
  }

}
