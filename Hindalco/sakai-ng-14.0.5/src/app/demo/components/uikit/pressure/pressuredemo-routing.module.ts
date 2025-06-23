import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PressureDemoComponent } from './pressuredemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PressureDemoComponent }
	])],
	exports: [RouterModule]
})
export class PressureDemoRoutingModule { }
