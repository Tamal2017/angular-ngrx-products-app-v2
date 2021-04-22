import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetSelectedProductsAction } from '../../../ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllProducts(): void {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts(): void {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }
}
