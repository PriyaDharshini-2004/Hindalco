import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pump2RoutingModule } from './pump2-routing.module';
import { Pump2Component } from './pump2.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        Pump2RoutingModule
    ],
    declarations: [Pump2Component]
})
export class Pump2Module { }
