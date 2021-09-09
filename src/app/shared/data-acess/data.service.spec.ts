import { TestBed } from '@angular/core/testing';
import { DataModule } from './data.module';

import { DataService, EnvironmentConfig } from './data.service';

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

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [DataModule.forRoot(dataConfig)],
        });
        service = TestBed.inject(DataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
