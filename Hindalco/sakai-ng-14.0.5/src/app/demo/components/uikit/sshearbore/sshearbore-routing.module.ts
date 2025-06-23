import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SshearboreComponent } from './sshearbore.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SshearboreComponent }
    ])],
    exports: [RouterModule]
})
export class SshearboreRoutingModule { }
