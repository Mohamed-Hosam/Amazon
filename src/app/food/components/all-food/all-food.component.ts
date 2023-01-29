import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-food',
  templateUrl: './all-food.component.html',
  styleUrls: ['./all-food.component.css']
})
export class AllFoodComponent {

  foodType:String = "fruit"
  isAscending:boolean = true
  food:any[] = []
  numberOfEntries:number = 0
  pageSize:number = 9
  pagingPages:number[] = []
  currentPage:number = 1
  totalPages:number = 1
  startPage:number =1
  endPage:number = 1
  previousPage:number = 1
  nextPage:number = 1

constructor(private service:FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    // In order to track changes in the query parameters of the url
    this.route.queryParams.subscribe(params => {
    this.getFood()
    this.changePaging()
    });
  }

  getFood(){
  this.service.getAllFood().subscribe((res:any) =>{
    this.food =res.data
    this.foodType = res.data[0].type
    this.numberOfEntries = res.count
    this.changePaging()
  },
  error => {
    alert("Error " + error.status)
  })
  }

  changePaging(){
    this.pagingPages = []
    this.totalPages = Math.ceil(this.numberOfEntries / this.pageSize)
    this.currentPage = parseInt((window.location.search).slice(6))
    this.nextPage = (this.currentPage+1)
    if(this.totalPages==1){
      this.nextPage = 1
    }else{
      if(this.nextPage>this.totalPages){
        this.nextPage = this.nextPage%this.totalPages
      }
    }
    this.previousPage = this.currentPage-1
    if(this.previousPage<1){
      this.previousPage = this.totalPages
    }
    if(this.totalPages<=6){
      for (let i = 1; i <= this.totalPages; i++) {
        this.pagingPages[i-1] = i;
      }
    }else{
      if((this.currentPage+3) > this.totalPages){ //if the current page is in the last 3 pages
        for (let i = 0; i < 6; i++) {
          this.pagingPages[i] = this.totalPages-(5-i);
        }
      }else{
        if((this.currentPage -3)< 1 ){ //if the current page is in the first 3 pages
          for (let i = 1; i <= 6; i++) {
            this.pagingPages[i-1] = i;
          }
        }else{  //otherise I will add 2 pages before the current page and 3 pages after in the pagination
          for (let i = 0; i < 2; i++) {
            this.pagingPages[i] = this.currentPage-(2-i);
          }
          for (let i = 0; i < 4; i++) {
            this.pagingPages[i+2] = this.currentPage+i;
          }
        }
      }
    }
  }
}
