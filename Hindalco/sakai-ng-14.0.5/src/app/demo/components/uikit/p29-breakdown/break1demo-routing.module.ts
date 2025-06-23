import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Break1DemoComponent } from './break1demo.component';
import { Hydraulic3Component } from './hydraulic3.component';
import { Electrical3Component } from './electrical3.component';
import { Mechanical3Component } from './mechanical3.component';
import { Breakhydr1Component } from './breakhydr1.component';
import { Breakelectr1Component } from './breakelectr1.component';
import { Breakmech1Component } from './breakmech1.component';


const routes: Routes = [
    { path: '', component: Break1DemoComponent },
    { path: 'hydraulic3', component: Hydraulic3Component },
    { path: 'electrical3', component: Electrical3Component },
    { path: 'mechanical3', component: Mechanical3Component },
    { path: 'breakhydr1', component: Breakhydr1Component},
    { path: 'breakelectr1', component: Breakelectr1Component},
    { path: 'breakmech1', component: Breakmech1Component}
   
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class Break1DemoRoutingModule { }
