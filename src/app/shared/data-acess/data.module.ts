import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentConfig, ENV_CONFIG } from './data.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
})
export class DataModule {
    static forRoot(config: EnvironmentConfig): ModuleWithProviders<DataModule> {
        return {
            ngModule: DataModule,
            providers: [
                {
                    provide: ENV_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
}
