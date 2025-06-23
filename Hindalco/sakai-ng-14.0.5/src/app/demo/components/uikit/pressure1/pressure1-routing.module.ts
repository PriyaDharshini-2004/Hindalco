import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pressure1Component } from './pressure1.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Pressure1Component }
	])],
	exports: [RouterModule]
})
export class Pressure1RoutingModule { }
