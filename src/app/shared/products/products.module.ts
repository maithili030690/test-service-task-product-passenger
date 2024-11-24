import { NgModule } from "@angular/core";
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from "@angular/common";
import { ProductMaterialModule } from "../matrial-module/product-material/product-material.module";
import { FormsModule } from "@angular/forms";




@NgModule({
    declarations:[
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent
  ],
    imports:[
        CommonModule,
        ProductMaterialModule,
        FormsModule
    ],
    exports:[
        ProductDashboardComponent
    ]
})
export class ProductsModule{
   constructor(){
    console.log(`product module loaded`)
   }
}