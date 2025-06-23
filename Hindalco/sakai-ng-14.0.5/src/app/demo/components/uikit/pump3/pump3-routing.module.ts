import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pump3Component } from './pump3.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Pump3Component }
    ])],
    exports: [RouterModule]
})
export class Pump3RoutingModule { }
