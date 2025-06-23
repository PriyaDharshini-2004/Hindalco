import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreakDemoComponent } from './breakdemo.component';
import { BreakDemoRoutingModule } from './breakdemo-routing.module';
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
import { Hydraulic2Component } from './hydraulic2.component';
import { Electrical2Component } from './electrical2.component';
import { Mechanical2Component } from './mechanical2.component';
import { BreakhydraComponent } from './breakhydra.component';
import { BreakelectrComponent } from './breakelectr.component';
import { BreakmechComponent } from './breakmech.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		BreakDemoRoutingModule,
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
	declarations: [BreakDemoComponent,
		Hydraulic2Component,
		Electrical2Component,
		Mechanical2Component,
		BreakhydraComponent,
		BreakelectrComponent,
		BreakmechComponent

	]
})
export class BreakDemoModule { }
