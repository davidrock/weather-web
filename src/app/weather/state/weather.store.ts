import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Forecast } from 'src/app/shared';

export interface WeatherState {
    forecast?: Forecast[];
    selectedCity?: Forecast;
}

export function createInitialState(): WeatherState {
    return {
        forecast: [],
        selectedCity: undefined,
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weather' })
export class WeatherStore extends Store<WeatherState> {
    constructor() {
        super(createInitialState());
    }

    addUniqueWeather(data: Forecast): void {
        const current = this.getValue().forecast ?? [];
        const newList = current.filter(item => item.id !== data.id);

        newList.push(data);

        this.update({ forecast: newList });
    }

    setSelectedCity(city: Forecast | undefined): void {
        if (!city) {
            return;
        }

        this.update({ selectedCity: city });
    }
}
