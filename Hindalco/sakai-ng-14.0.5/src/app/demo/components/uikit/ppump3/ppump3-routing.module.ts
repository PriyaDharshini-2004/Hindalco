import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ppump3Component } from './ppump3.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Ppump3Component }
    ])],
    exports: [RouterModule]
})
export class Ppump3RoutingModule { }
