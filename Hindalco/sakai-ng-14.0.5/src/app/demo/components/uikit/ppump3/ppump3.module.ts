import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ppump3RoutingModule } from './ppump3-routing.module';
import { Ppump3Component } from './ppump3.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        Ppump3RoutingModule
    ],
    declarations: [Ppump3Component]
})
export class Ppump3Module { }
