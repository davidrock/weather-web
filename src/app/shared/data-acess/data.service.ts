import { Inject, Injectable, InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
    environment: {
        production: boolean;
        weatherApiKey: string;
        forecastApiUrl: string;
        pixabayApiKey: string;
        pixabayApiUrl: string;
        pexelsApiKey: string;
    };
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('EnvironmentConfig');

@Injectable({
    providedIn: 'root',
})
export class DataService {
    production: boolean;
    weatherApiKey: string;
    forecastApiUrl: string;
    pixabayApiKey: string;
    pixabayApiUrl: string;
    pexelsApiKey: string;

    constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig) {
        this.forecastApiUrl = `${this.config.environment.forecastApiUrl}`;
        this.weatherApiKey = `${this.config.environment.weatherApiKey}`;
        this.pexelsApiKey = `${this.config.environment.pexelsApiKey}`;
        this.pixabayApiKey = `${this.config.environment.pixabayApiKey}`;
        this.pixabayApiUrl = `${this.config.environment.pixabayApiUrl}`;
        this.production = this.config.environment.production;
    }
}
