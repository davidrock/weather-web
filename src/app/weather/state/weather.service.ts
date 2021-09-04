import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    constructor(private weatherStore: WeatherStore, private http: HttpClient) {}
}
