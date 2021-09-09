import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from './weather/weather.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataModule } from './shared/data-acess/data.module';
import { EnvironmentConfig } from './shared/data-acess/data.service';

const dataConfig: EnvironmentConfig = {
    environment: {
        production: false,
        weatherApiKey: environment.weatherApiKey,
        forecastApiUrl: environment.forecastApiUrl,
        pixabayApiKey: environment.pixabayApiKey,
        pixabayApiUrl: environment.pixabayApiUrl,
        pexelsApiKey: environment.pexelsApiKey,
    },
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        WeatherModule,
        FormsModule,
        ReactiveFormsModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule,
        DataModule.forRoot(dataConfig),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
