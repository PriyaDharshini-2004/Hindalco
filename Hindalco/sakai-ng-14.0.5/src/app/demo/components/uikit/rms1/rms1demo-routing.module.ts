import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Rms1DemoComponent } from './rms1demo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Rms1DemoComponent }
	])],
	exports: [RouterModule]
})
export class Rms1DemoRoutingModule { }
