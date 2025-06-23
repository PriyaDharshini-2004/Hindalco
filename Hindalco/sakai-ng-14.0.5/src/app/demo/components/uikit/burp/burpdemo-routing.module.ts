import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BurpDemoComponent } from './burpdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BurpDemoComponent }
	])],
	exports: [RouterModule]
})
export class BurpDemoRoutingModule { }
