import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ppump1Component } from './ppump1.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Ppump1Component }
    ])],
    exports: [RouterModule]
})
export class Ppump1RoutingModule { }
