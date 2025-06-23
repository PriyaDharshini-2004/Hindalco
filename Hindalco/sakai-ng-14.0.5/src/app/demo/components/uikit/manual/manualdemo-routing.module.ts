import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManualDemoComponent } from './manualdemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ManualDemoComponent }
	])],
	exports: [RouterModule]
})
export class ManualDemoRoutingModule { }
