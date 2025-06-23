import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlowDemoComponent } from './flowdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FlowDemoComponent }
	])],
	exports: [RouterModule]
})
export class FlowDemoRoutingModule { }
