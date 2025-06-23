import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CconsealrodComponent } from './cconsealrod.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CconsealrodComponent }
    ])],
    exports: [RouterModule]
})
export class CconsealrodRoutingModule { }
