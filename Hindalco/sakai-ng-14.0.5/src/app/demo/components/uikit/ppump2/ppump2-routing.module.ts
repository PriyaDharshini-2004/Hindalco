import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ppump2Component } from './ppump2.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: Ppump2Component }
    ])],
    exports: [RouterModule]
})
export class Ppump2RoutingModule { }
