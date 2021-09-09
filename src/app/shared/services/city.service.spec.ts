import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataModule } from '../data-acess/data.module';
import { EnvironmentConfig } from '../data-acess/data.service';

import { CityService } from './city.service';

const dataConfig: EnvironmentConfig = {
    environment: {
        production: false,
        weatherApiKey: 'key',
        forecastApiUrl: 'https://forecast',
        pexelsApiKey: 'key',
        pixabayApiUrl: 'https://pixabay',
        pixabayApiKey: 'key',
    },
};

describe('CityService', () => {
    let service: CityService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, DataModule.forRoot(dataConfig)],
            providers: [CityService],
        });
        service = TestBed.inject(CityService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have getCityImage function', () => {
        const expectedUrl = `${dataConfig.environment.pixabayApiUrl}?key=${dataConfig.environment.pixabayApiKey}&q=city&image_type=photo&orientation=horizontal&category=business`;
        const spyService = jest.spyOn(service, 'getCityImage');
        const mocResponse = {
            total: 11,
            totalHits: 11,
            hits: [
                {
                    webformatURL: 'https://pixabay.com/get/123.jpg',
                },
            ],
        };

        service.getCityImage('city').subscribe(response => {
            expect(response).toEqual(mocResponse);
        });

        const request = httpMock.expectOne(expectedUrl);
        request.flush({ hits: [{ webformatURL: 'url' }] });
        httpMock.verify();

        expect(request.request.method).toBe('GET');
        expect(spyService).toHaveBeenCalledWith('city');
    });
});
