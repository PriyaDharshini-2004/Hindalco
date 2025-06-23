import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pump2Component } from './pump2.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Pump2Component }
    ])],
    exports: [RouterModule]
})
export class Pump2RoutingModule { }
