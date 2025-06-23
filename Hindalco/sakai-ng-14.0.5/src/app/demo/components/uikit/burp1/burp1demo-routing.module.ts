import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Burp1DemoComponent } from './burp1demo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Burp1DemoComponent }
	])],
	exports: [RouterModule]
})
export class Burp1DemoRoutingModule { }
