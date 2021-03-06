import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
    {
        path: '**',
        redirectTo: 'general',
    },
    {
        path: 'general',
        component: GeneralComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
