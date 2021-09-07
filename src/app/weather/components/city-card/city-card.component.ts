import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { CityService } from 'src/app/services/city.service';
import { Forecast } from 'src/app/shared';

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

    constructor(private cityService: CityService) {
        this.bgImage = 'https://source.unsplash.com/random/800x600';
        this.optStorm = {
            path: 'assets/animations/storm.json',
        };
        this.optSunny = {
            path: 'assets/animations/sunny.json',
        };
        this.optWindy = {
            path: 'assets/animations/windy.json',
        };
    }

    styles: Partial<CSSStyleDeclaration> = {
        maxWidth: '50px',
        margin: '0 auto',
    };

    ngOnInit(): void {
        console.log(this.city);
        this.findImage();
    }

    findImage(): void {
        this.bgImage = `https://source.unsplash.com/random/800x600?sig=${this.city}`;

        if (this.city) {
            this.cityService.getCityImage(this.city.name).subscribe(res => {
                console.log(res);
                this.bgImage = res.hits[0].webformatURL;
            });
        }
    }

    openCity(city: Forecast | undefined): void {
        console.log(city);
    }
}
