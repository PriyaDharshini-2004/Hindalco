import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShearrodRoutingModule } from './shearrod-routing.module';
import { ShearrodComponent } from './shearrod.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        ShearrodRoutingModule
    ],
    declarations: [ShearrodComponent]
})
export class ShearrodModule { }
