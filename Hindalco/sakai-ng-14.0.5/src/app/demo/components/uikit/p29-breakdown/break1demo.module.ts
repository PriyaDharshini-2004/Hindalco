import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Break1DemoComponent } from './break1demo.component';
import { Break1DemoRoutingModule } from './break1demo-routing.module';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { Hydraulic3Component } from './hydraulic3.component';
import { Electrical3Component } from './electrical3.component';
import { Mechanical3Component } from './mechanical3.component';
import { Breakhydr1Component } from './breakhydr1.component';
import { Breakelectr1Component } from './breakelectr1.component';
import { Breakmech1Component } from './breakmech1.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		Break1DemoRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule
	],
	declarations: [Break1DemoComponent,
		Hydraulic3Component,
		Electrical3Component,
		Mechanical3Component,
		Breakhydr1Component,
		Breakelectr1Component,
		Breakmech1Component

	]
})
export class Break1DemoModule { }
