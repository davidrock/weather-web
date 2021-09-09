import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { CityService } from '../../../services/city.service';
import { Forecast } from '../../../shared/models/forecast.model';
import { WeatherService } from '../../state/weather.service';

@Component({
    selector: 'app-city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit {
    @Input('city') city: Forecast | undefined;
    bgImage: string;
    optStorm: AnimationOptions;
    optSunny: AnimationOptions;
    optWindy: AnimationOptions;

    constructor(private cityService: CityService, private weatherService: WeatherService) {
        this.bgImage = `https://source.unsplash.com/random/800x600?sig=${this.city}`;
        this.optStorm = {
            path: 'assets/animations/storm.json',
        };
        this.optSunny = {
            path: 'assets/animations/sunny.json',
        };
        this.optWindy = {
            path: 'assets/animations/windy-cloud.json',
        };
    }

    styles: Partial<CSSStyleDeclaration> = {
        maxWidth: '50px',
        margin: '0 auto',
    };

    ngOnInit(): void {
        this.findImage();
    }

    findImage(): void {
        if (this.city) {
            this.cityService.getCityImage(this.city.city.name).subscribe(res => {
                this.bgImage = res.hits[0].webformatURL;
            });
        }
    }

    openCity(city: Forecast | undefined): void {
        this.weatherService.setSelectedCity(city);
    }
}
