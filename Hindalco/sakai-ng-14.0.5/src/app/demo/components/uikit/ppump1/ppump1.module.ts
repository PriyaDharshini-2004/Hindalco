import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ppump1RoutingModule } from './ppump1-routing.module';
import { Ppump1Component } from './ppump1.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        ButtonModule,
        Ppump1RoutingModule
    ],
    declarations: [Ppump1Component]
})
export class Ppump1Module { }
