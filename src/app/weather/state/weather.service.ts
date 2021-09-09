import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../shared/data-acess/data.service';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    constructor(private weatherStore: WeatherStore, private data: DataService, private http: HttpClient) {}

    getWeather(city: string): void {
        this.http
            .get<Forecast>(`${this.data.forecastApiUrl}?q=${city}&appid=${this.data.weatherApiKey}&units=metric`)
            .subscribe((forecast: Forecast) => {
                this.weatherStore.addUniqueWeather(forecast);
            });
    }

    setSelectedCity(city: Forecast | undefined): void {
        this.weatherStore.setSelectedCity(city);
    }
}
