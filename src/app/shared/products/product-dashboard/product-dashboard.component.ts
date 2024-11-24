import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproducts } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
prodArr!:Array<Iproducts>
  constructor(
    private _productService :ProductService
  ) { }

  ngOnInit(): void {
  this.prodArr=  this._productService.fetchAllProd()
  }

}
