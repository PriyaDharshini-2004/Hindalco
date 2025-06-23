import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { P11Component } from './p11.component'; // Import the new component for P11
import { P29Component } from './p29.component'; // Import the new component for P29

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent },
        { path: 'p11', component: P11Component }, // Route for P11
        { path: 'p29', component: P29Component }, // Route for P29
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
