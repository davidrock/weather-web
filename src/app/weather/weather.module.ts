import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherRoutingModule } from './weather.routing.module';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
    declarations: [ForecastComponent, CityCardComponent],
    imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
