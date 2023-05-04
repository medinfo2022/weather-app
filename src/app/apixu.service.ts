import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location : any){
    return this.http.get(
        

        //'http://api.weatherapi.com/v1/current.json?key=e2acb6322ffc4233a7e144824230305&q='+location+'&aqi=no'
        'http://localhost:8080/article/'+location 
    );
  }
}
