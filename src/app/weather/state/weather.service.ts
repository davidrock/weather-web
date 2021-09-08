import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { environment } from 'src/environments/environment';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    constructor(private weatherStore: WeatherStore, private cityService: CityService, private http: HttpClient) {}

    getWeather(city: string): void {
        this.http
            .get<Forecast>(`${environment.forecastApiUrl}?q=${city}&appid=${environment.weatherApiKey}&units=metric`)
            .subscribe((forecast: Forecast) => {
              debugger
                this.weatherStore.addUniqueWeather(forecast);
            });
    }

    setSelectedCity(city: Forecast | undefined): void {
        this.weatherStore.setSelectedCity(city);
    }
}
