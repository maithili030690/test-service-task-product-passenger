import { NgModule } from "@angular/core";
import { PassDashBoardComponent } from './pass-dash-board/pass-dash-board.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { CommonModule } from "@angular/common";
import { ProductMaterialModule } from "../matrial-module/product-material/product-material.module";


@NgModule({
    declarations:[
    PassDashBoardComponent,
    PassCountComponent,
    PassCardComponent
  ],
    imports:[
        CommonModule,
        ProductMaterialModule
    ],
    exports:[
        PassDashBoardComponent
    ]
})

export class PassengerModule{

}