import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Planned1DemoComponent } from './planned1demo.component';
import { Hydraulic1Component } from './hydraulic1.component';
import { Electrical1Component } from './electrical1.component';
import { Mechanical1Component } from './mechanical1.component';
import { Sumhydra1Component } from './sumhydra1.component';
import { Sumelect1Component } from './sumelect1.component';
import { Summech1Component } from './summech1.component';

const routes: Routes = [
    { path: '', component: Planned1DemoComponent },
    { path: 'hydraulic1', component: Hydraulic1Component },
    { path: 'electrical1', component: Electrical1Component },
    { path: 'mechanical1', component: Mechanical1Component },
    { path: 'sumhydra1', component: Sumhydra1Component},
    { path: 'sumelect1', component: Sumelect1Component},
    { path: 'summech1', component: Summech1Component}

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class Planned1DemoRoutingModule { }
