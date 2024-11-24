import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './shared/products/products.module';
import { PassengerModule } from './shared/passenger/passenger.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  
    BrowserAnimationsModule,
    ProductsModule,
    PassengerModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
