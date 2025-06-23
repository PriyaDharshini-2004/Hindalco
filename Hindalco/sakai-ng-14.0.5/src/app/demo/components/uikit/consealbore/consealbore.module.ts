import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsealboreRoutingModule } from './consealbore-routing.module';
import { ConsealboreComponent } from './consealbore.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        ChartModule,
        ConsealboreRoutingModule
    ],
    declarations: [ConsealboreComponent]
})
export class ConsealboreModule { }
