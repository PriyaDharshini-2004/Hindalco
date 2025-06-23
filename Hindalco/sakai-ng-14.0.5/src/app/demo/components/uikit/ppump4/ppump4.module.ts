import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ppump4RoutingModule } from './ppump4-routing.module';
import { Ppump4Component } from './ppump4.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        ButtonModule,
        Ppump4RoutingModule
    ],
    declarations: [Ppump4Component]
})
export class Ppump4Module { }
