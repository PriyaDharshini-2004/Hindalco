import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakDemoComponent } from './breakdemo.component';
import { Hydraulic2Component } from './hydraulic2.component';
import { Electrical2Component } from './electrical2.component';
import { Mechanical2Component } from './mechanical2.component';
import { BreakhydraComponent } from './breakhydra.component';
import { BreakelectrComponent } from './breakelectr.component';
import { BreakmechComponent } from './breakmech.component';

const routes: Routes = [
    { path: '', component: BreakDemoComponent },
    { path: 'hydraulic2', component: Hydraulic2Component },
    { path: 'electrical2', component: Electrical2Component },
    { path: 'mechanical2', component: Mechanical2Component },
    { path: 'breakhydra', component: BreakhydraComponent },
    { path: 'breakelectr', component: BreakelectrComponent},
    { path: 'breakmech', component: BreakmechComponent}
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class BreakDemoRoutingModule { }
