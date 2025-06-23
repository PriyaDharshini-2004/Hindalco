import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CconsealrodRoutingModule } from './cconsealrod-routing.module';
import { CconsealrodComponent } from './cconsealrod.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        CconsealrodRoutingModule
    ],
    declarations: [CconsealrodComponent]
})
export class CconsealrodModule { }
