import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { CityServiceMock } from '../../shared/services/mocks/city.service.mock';
import { CityService } from '../../shared/services/city.service';
import { CityCardComponent } from '../components/city-card/city-card.component';
import { WeatherQueryMock } from '../state/mocks/weather.query.mock';
import { WeatherServiceMock } from '../state/mocks/weather.service.mock';
import { WeatherQuery } from '../state/weather.query';
import { WeatherService } from '../state/weather.service';

import { ForecastComponent } from './forecast.component';
import { HourlyWeatherComponent } from '../components/hourly-weather/hourly-weather.component';

describe('ForecastComponent', () => {
    let component: ForecastComponent;
    let fixture: ComponentFixture<ForecastComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [ForecastComponent, MockComponent(CityCardComponent), MockComponent(HourlyWeatherComponent)],
            providers: [
                {
                    provide: WeatherService,
                    useClass: WeatherServiceMock,
                },
                {
                    provide: WeatherQuery,
                    useClass: WeatherQueryMock,
                },
                {
                    provide: CityService,
                    use: CityServiceMock,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
