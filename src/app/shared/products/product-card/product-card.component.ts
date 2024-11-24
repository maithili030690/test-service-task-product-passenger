import { Component, Input, OnInit } from '@angular/core';
import { Iproducts, Pstatus } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input()productObj!:Iproducts
productStatus = Pstatus
  constructor(
    private _prodService:ProductService
  ) { }

  ngOnInit(): void {
  }

  onStatusChange(updatedstatus:Pstatus){
    console.log(this.productObj)
    console.log(updatedstatus)
    //while we send only id and status
   this._prodService.updatedStatus(updatedstatus,this.productObj.pid)
  }
}
