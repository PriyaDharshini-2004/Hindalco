import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShearrodComponent } from './shearrod.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ShearrodComponent }
    ])],
    exports: [RouterModule]
})
export class ShearrodRoutingModule { }
