import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsModule } from './foods/foods.module';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantModule } from 'src/app/restaurants/restaurants.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FoodsModule,
    HttpClientModule,
    RestaurantModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// code hidden for display purpose
 

