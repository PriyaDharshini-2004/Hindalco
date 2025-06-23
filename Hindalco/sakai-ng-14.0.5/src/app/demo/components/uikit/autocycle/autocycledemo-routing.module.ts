import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutocycleDemoComponent } from './autocycledemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AutocycleDemoComponent }
	])],
	exports: [RouterModule]
})
export class AutocycleDemoRoutingModule { }
