import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pump1Component } from './pump1.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Pump1Component }
    ])],
    exports: [RouterModule]
})
export class Pump1RoutingModule { }
