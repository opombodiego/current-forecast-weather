import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getWeather(cityName) {
    return this.httpClient.get(`https://api.hgbrasil.com/weather?format=json-cors&key=${environment.apiKey}&city_name=${cityName}`)
      .toPromise()
      .then(response => response)
      .catch(error => console.error(error));
  }

}
