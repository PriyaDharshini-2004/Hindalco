import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Flow1DemoComponent } from './flow1demo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Flow1DemoComponent }
	])],
	exports: [RouterModule]
})
export class Flow1DemoRoutingModule { }
