import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-all-food',
  templateUrl: './all-food.component.html',
  styleUrls: ['./all-food.component.css']
})
export class AllFoodComponent {

  food:any[] = []

constructor(private service:FoodService) { }

  ngOnInit(): void{
    this.getFood()
  }

  getFood(){
    this.service.getAllFood().subscribe((res:any) =>{
      this.food =res.data
    },
    error => {
      alert("Error " + error.status)
    })
  }
}
