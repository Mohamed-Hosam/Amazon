import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllElectronicsComponent } from './electronic/components/all-electronics/all-electronics.component';
import { AllFoodComponent } from './food/components/all-food/all-food.component';

const routes: Routes= [
  {path: "electronics", component:AllElectronicsComponent},
  {path: "food", component:AllFoodComponent},
  {path: "**", redirectTo: "electronics", pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
