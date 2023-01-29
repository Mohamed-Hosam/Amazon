import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAllFood(){
    const queryString = (window.location.search); // to get the query parameters from the url
    return this.http.get(environment.baseApi + 'food'+queryString)
  }
}
