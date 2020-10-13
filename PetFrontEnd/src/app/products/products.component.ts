import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../shared/services/currency.service';
import {ProductsService} from '../shared/services/products.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  categoryCode: string;
  minRange: number;
  maxRange: number;
  inputName: string;
  updateName(event): void{
    this.inputName = event.target.value;
  }
  updateMin(event): void {
    this.minRange = event.target.value;
  }
  updateMax(event): void {
    this.maxRange = event.target.value;
  }
  addProduct(): void {
    // this.ps.addProductNo6();
  }
  constructor( private ps: ProductsService) { }
  ngOnInit(): void {
    this.ps.getProducts().subscribe(res => this.products = res);
  }

}
