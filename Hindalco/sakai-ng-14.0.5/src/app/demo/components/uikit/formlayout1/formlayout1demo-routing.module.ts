import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormLayout1DemoComponent } from './formlayout1demo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FormLayout1DemoComponent }
	])],
	exports: [RouterModule]
})
export class FormLayout1DemoRoutingModule { }
