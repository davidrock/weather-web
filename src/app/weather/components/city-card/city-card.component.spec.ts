import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvironmentConfig } from '../../../shared/data-acess/data.service';
import { CityService } from '../../../services/city.service';
import { CityServiceMock } from '../../../services/mocks/city.service.mock';
import { WeatherQueryMock } from '../../state/mocks/weather.query.mock';
import { WeatherServiceMock } from '../../state/mocks/weather.service.mock';
import { WeatherQuery } from '../../state/weather.query';
import { WeatherService } from '../../state/weather.service';

import { CityCardComponent } from './city-card.component';
import { DataModule } from '../../../shared/data-acess/data.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const dataConfig: EnvironmentConfig = {
    environment: {
        production: false,
        weatherApiKey: 'key',
        forecastApiUrl: 'https://test',
        pexelsApiKey: 'key',
        pixabayApiKey: 'key',
        pixabayApiUrl: 'key',
    },
};

describe('CityCardComponent', () => {
    let component: CityCardComponent;
    let fixture: ComponentFixture<CityCardComponent>;
    let weatherQuery: WeatherQuery;
    let weatherService: WeatherService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CityCardComponent],
            imports: [HttpClientTestingModule, DataModule.forRoot(dataConfig)],
            providers: [
                {
                    provide: WeatherQuery,
                    useClass: WeatherQueryMock,
                },
                {
                    provide: CityService,
                    useClass: CityServiceMock,
                },
            ],
        }).compileComponents();

        weatherQuery = TestBed.inject(WeatherQuery);
        weatherService = TestBed.inject(WeatherService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CityCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
