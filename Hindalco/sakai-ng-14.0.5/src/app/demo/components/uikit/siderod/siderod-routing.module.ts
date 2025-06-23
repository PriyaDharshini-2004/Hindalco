import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiderodComponent } from './siderod.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SiderodComponent }
    ])],
    exports: [RouterModule]
})
export class SiderodRoutingModule { }
