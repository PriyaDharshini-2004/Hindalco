import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsideboreRoutingModule } from './ssidebore-routing.module';
import { SsideboreComponent } from './ssidebore.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        SsideboreRoutingModule
    ],
    declarations: [SsideboreComponent]
})
export class SsideboreModule { }
