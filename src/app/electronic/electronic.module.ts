import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllElectronicsComponent } from './components/all-electronics/all-electronics.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AllElectronicsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    AllElectronicsComponent
  ],
  bootstrap: [AllElectronicsComponent]

})
export class ElectronicModule { }
