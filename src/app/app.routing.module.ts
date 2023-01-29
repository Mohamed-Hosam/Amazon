import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllElectronicsComponent } from './electronic/components/all-electronics/all-electronics.component';
import { AllFoodComponent } from './food/components/all-food/all-food.component';

const routes: Routes= [
  {path: "food", component:AllFoodComponent},
  {path: "electronics", component:AllElectronicsComponent},
  {path: "**", redirectTo: "food", pathMatch: "full"} //if the path is anything other than food or electronics it will be redirected to foodas default
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
