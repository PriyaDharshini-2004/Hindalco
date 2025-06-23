import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RmsDemoComponent } from './rmsdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RmsDemoComponent }
	])],
	exports: [RouterModule]
})
export class RmsDemoRoutingModule { }
