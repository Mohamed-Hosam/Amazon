import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {

  constructor(private http:HttpClient) { }

  getAllElectronics(){
    return this.http.get(environment.baseApi + 'electronic')
  }
}
