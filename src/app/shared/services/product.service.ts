import { inject, Injectable } from '@angular/core';
import { Iproducts, Pstatus } from '../models/product';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _snackBarService =inject(SnackBarService)
  productsArr:Array<Iproducts> = [
    {
      pname: "Samsung 31",
      pdetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ad non corrupti doloremque hic incidunt quasi placeat aut velit. Iure.',
      pid: '123',
      pstatus: Pstatus.InProgress
    },
    {
      pname: "Samsung 32",
      pdetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ad non corrupti doloremque hic incidunt quasi placeat aut velit. Iure.',
      pid:'124',
      pstatus: Pstatus.Dispatched
    },
    {
      pname: "Samsung 32",
      pdetails: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ad non corrupti doloremque hic incidunt quasi placeat aut velit. Iure.',
      pid:'124',
      pstatus: Pstatus.Delivered
    }
  ]
  
  constructor(

  ) { }

  fetchAllProd():Array<Iproducts>{
    return this.productsArr
  }
  createNewProd(prodObj:Iproducts){
    //Api call to add new product in db
    this.productsArr.unshift(prodObj)
    this._snackBarService.openSnackBar(`New Product${prodObj.pname} is added successfully!!!` )
  }
  updatedStatus(updatedStatus:Pstatus,pid:string){
    //Api call to update
    let getIndex =this.productsArr.findIndex(prod=>prod.pid ===pid)
    this.productsArr[getIndex].pstatus = updatedStatus
    this._snackBarService.openSnackBar(`The product is updated successfully `)
  }
}
