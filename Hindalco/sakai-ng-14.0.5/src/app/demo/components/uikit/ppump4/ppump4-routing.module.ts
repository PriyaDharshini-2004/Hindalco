import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ppump4Component } from './ppump4.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Ppump4Component }
    ])],
    exports: [RouterModule]
})
export class Ppump4RoutingModule { }
