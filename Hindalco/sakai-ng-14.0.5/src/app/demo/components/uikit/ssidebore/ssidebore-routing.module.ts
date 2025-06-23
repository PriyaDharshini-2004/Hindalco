import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SsideboreComponent } from './ssidebore.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SsideboreComponent }
    ])],
    exports: [RouterModule]
})
export class SsideboreRoutingModule { }
