import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsealboreComponent } from './consealbore.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ConsealboreComponent }
    ])],
    exports: [RouterModule]
})
export class ConsealboreRoutingModule { }
