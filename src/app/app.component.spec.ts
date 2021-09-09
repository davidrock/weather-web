import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SettingsModule } from './settings/settings.module';
import { DataModule } from './shared/data-acess/data.module';
import { EnvironmentConfig } from './shared/data-acess/data.service';

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

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SettingsModule, RouterTestingModule, DataModule.forRoot(dataConfig)],
            declarations: [AppComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });
});
