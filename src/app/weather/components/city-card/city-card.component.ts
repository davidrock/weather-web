import { Component, Input, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
    selector: 'app-city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit {
    @Input('city') city: string;
    bgImage: string;

    constructor(private cityService: CityService) {
        this.city = '';
        this.bgImage = 'https://source.unsplash.com/random/800x600';
    }

    ngOnInit(): void {
        console.log(this.city);
        this.findImage();
    }

    findImage(): void {
        this.bgImage = `https://source.unsplash.com/random/800x600?sig=${this.city}`;

        this.cityService.getCityImage(this.city).subscribe(res => {
            console.log(res);
            this.bgImage = res.hits[0].webformatURL;
        });
    }

    openCity(city: string): void {
        console.log(city);
    }
}
