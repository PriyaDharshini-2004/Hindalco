import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Manual1DemoComponent } from './manual1demo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: Manual1DemoComponent }
	])],
	exports: [RouterModule]
})
export class Manual1DemoRoutingModule { }
