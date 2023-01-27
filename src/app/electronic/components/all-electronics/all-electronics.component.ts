import { Component, OnInit } from '@angular/core';
import { ElectronicsService } from '../../services/electronics.service';

@Component({
  selector: 'app-all-electronics',
  templateUrl: './all-electronics.component.html',
  styleUrls: ['./all-electronics.component.css']
})
export class AllElectronicsComponent {

  electronics:any[] = []


  constructor(private service:ElectronicsService) { }

  ngOnInit(): void{
    this.getElectronics()
  }

  getElectronics(){
    this.service.getAllElectronics().subscribe((res:any) =>{
      this.electronics =res.data
    })
  }

}
