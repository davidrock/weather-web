import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { WeatherModule } from './weather/weather.module';
import { DataModule } from './shared/data-acess/data.module';
import { EnvironmentConfig } from './shared/data-acess/data.service';
import { HttpClientModule } from '@angular/common/http';

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
        WeatherModule,
        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule,
        HttpClientModule,
        DataModule.forRoot(dataConfig),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
