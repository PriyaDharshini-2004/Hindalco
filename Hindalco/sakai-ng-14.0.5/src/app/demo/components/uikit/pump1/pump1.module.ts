import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pump1RoutingModule } from './pump1-routing.module';
import { Pump1Component } from './pump1.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        Pump1RoutingModule
    ],
    declarations: [Pump1Component]
})
export class Pump1Module { }
