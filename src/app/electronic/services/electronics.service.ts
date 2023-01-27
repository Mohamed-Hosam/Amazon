import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {

  constructor(private http:HttpClient) { }

  getAllElectronics(){
    return this.http.get('http://localhost:8000/api/electronic')
  }
}
