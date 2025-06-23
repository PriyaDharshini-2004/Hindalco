import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsiderodRoutingModule } from './ssiderod-routing.module';
import { SsiderodComponent } from './ssiderod.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        ButtonModule,
        SsiderodRoutingModule
    ],
    declarations: [SsiderodComponent]
})
export class SsiderodModule { }
