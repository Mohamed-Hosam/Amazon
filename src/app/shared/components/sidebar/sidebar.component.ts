import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  mod:String = window.location.pathname
  model:String = this.mod.substring(1,this.mod.length)

  changeModel(){
    this.mod = window.location.pathname
    this.model = this.mod.substring(1,this.mod.length)
    if(this.model == 'food'){
      this.model = 'electronics'
    }else{
      this.model = 'food'
    }
  }
}
