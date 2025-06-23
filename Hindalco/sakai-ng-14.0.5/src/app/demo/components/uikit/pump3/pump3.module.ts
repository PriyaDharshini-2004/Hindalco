import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pump3RoutingModule } from './pump3-routing.module';
import { Pump3Component } from './pump3.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        Pump3RoutingModule
    ],
    declarations: [Pump3Component]
})
export class Pump3Module { }
