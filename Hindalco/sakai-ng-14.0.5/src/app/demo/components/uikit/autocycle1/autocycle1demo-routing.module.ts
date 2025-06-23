import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Autocycle1DemoComponent } from './autocycle1demo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Autocycle1DemoComponent }
	])],
	exports: [RouterModule]
})
export class Autocycle1DemoRoutingModule { }
