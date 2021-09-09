import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherRoutingModule } from './weather.routing.module';
import { CityCardComponent } from './components/city-card/city-card.component';
import { LottieModule } from 'ngx-lottie';
// import player, { LottiePlayer } from 'lottie-web/build/player/lottie_svg';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { HttpClientModule } from '@angular/common/http';

// export function playerFactory(): LottiePlayer {
//     return player;
// }

@NgModule({
    declarations: [ForecastComponent, CityCardComponent, HourlyWeatherComponent],
    imports: [CommonModule, HttpClientModule, WeatherRoutingModule /*LottieModule.forRoot({ player: playerFactory })*/],
})
export class WeatherModule {}
