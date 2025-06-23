import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SsiderodComponent } from './ssiderod.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SsiderodComponent }
    ])],
    exports: [RouterModule]
})
export class SsiderodRoutingModule { }
