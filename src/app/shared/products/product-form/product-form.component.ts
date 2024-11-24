import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Iproducts, Pstatus } from '../../models/product';
import { UuidService } from '../../services/uuid.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
@ViewChild('productForm')productForm!:NgForm
  constructor(
    private _uuidService :UuidService,
    private _productService:ProductService
    
  ) { }

  ngOnInit(): void {
  }
  onProductAdd(){
    if(this.productForm.valid){
      let prodObj:Iproducts ={...this.productForm.value,pid:this._uuidService.generateUuid(),
        pstatus:Pstatus.InProgress
      }
      console.log(prodObj)
      this._productService.createNewProd(prodObj)
    }
  }
}
