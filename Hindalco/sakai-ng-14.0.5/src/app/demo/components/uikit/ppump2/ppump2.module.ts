import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ppump2RoutingModule } from './ppump2-routing.module';
import { Ppump2Component } from './ppump2.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        ButtonModule,
        Ppump2RoutingModule
    ],
    declarations: [Ppump2Component]
})
export class Ppump2Module { }
