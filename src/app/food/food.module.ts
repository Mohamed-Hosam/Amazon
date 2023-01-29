import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFoodComponent } from './components/all-food/all-food.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AllFoodComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    AllFoodComponent
  ]
})
export class FoodModule { }
