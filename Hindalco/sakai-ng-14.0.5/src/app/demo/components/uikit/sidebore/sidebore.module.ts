import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideboreRoutingModule } from './sidebore-routing.module';
import { SideboreComponent } from './sidebore.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        SideboreRoutingModule
    ],
    declarations: [SideboreComponent]
})
export class SideboreModule { }
