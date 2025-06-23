import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideboreComponent } from './sidebore.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SideboreComponent }
    ])],
    exports: [RouterModule]
})
export class SideboreRoutingModule { }
