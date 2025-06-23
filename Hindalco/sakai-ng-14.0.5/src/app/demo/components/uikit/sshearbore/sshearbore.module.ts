import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SshearboreRoutingModule } from './sshearbore-routing.module';
import { SshearboreComponent } from './sshearbore.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        ButtonModule,
        SshearboreRoutingModule
    ],
    declarations: [SshearboreComponent]
})
export class SshearboreModule { }
