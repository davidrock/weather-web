import { Clouds } from './clouds.model';
import { Main } from './main.model';
import { Rain } from './rain.mode';
import { Sys } from './sys.model';
import { Weather } from './weather.model';
import { Wind } from './wind.model';

export interface List {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
    date: Date;
    rain?: Rain;
}
