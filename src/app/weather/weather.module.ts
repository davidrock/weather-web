import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherRoutingModule } from './weather.routing.module';
import { CityCardComponent } from './components/city-card/city-card.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
// import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [ForecastComponent, CityCardComponent, HourlyWeatherComponent],
    imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
