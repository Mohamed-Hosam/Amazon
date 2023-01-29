import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsService {

  constructor(private http:HttpClient) { }

  getAllElectronics(){
    const queryString = (window.location.search); // to get the query parameters from the url
    return this.http.get(environment.baseApi + 'electronic'+queryString)
  }
}
