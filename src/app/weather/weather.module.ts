import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherRoutingModule } from './weather.routing.module';
import { CityCardComponent } from './components/city-card/city-card.component';
import { LottieModule } from 'ngx-lottie';
import player, { LottiePlayer } from 'lottie-web/build/player/lottie_svg';

export function playerFactory(): LottiePlayer {
    return player;
}

@NgModule({
    declarations: [ForecastComponent, CityCardComponent],
    imports: [CommonModule, WeatherRoutingModule, LottieModule.forRoot({ player: playerFactory })],
})
export class WeatherModule {}
