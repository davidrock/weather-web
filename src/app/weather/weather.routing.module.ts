import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
    {
        path: '**',
        redirectTo: 'forecast',
    },
    {
        path: 'forecast',
        component: ForecastComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WeatherRoutingModule {}
