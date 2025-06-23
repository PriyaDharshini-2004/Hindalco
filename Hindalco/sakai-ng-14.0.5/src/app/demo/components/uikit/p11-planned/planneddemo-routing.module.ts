import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannedDemoComponent } from './planneddemo.component';
import { HydraulicComponent } from './hydraulic.component';
import { ElectricalComponent } from './electrical.component';
import { MechanicalComponent } from './mechanical.component';
import { SumhydrComponent } from './sumhydr.component';
import { sumelectriComponent } from './sumelectri.component';
import { SummechComponent } from './summech.component';


const routes: Routes = [
    { path: '', component: PlannedDemoComponent },
    { path: 'hydraulic', component: HydraulicComponent },
    { path: 'electrical', component: ElectricalComponent },
    { path: 'mechanical', component: MechanicalComponent },
    { path: 'sumhydr',component: SumhydrComponent},
    { path: 'sumelectri',component:sumelectriComponent},
    { path: 'summech', component:SummechComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PlannedDemoRoutingModule { }
