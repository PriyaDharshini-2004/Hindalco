import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderodRoutingModule } from './siderod-routing.module';
import { SiderodComponent } from './siderod.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        SiderodRoutingModule
    ],
    declarations: [SiderodComponent]
})
export class SiderodModule { }
