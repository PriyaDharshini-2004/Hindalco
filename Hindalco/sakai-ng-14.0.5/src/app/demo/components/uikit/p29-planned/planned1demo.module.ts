import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Planned1DemoComponent } from './planned1demo.component';
import { Planned1DemoRoutingModule } from './planned1demo-routing.module';
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
import { Hydraulic1Component } from './hydraulic1.component';
import { Electrical1Component } from './electrical1.component';
import { Mechanical1Component } from './mechanical1.component';
import { Sumhydra1Component } from './sumhydra1.component';
import { Sumelect1Component } from './sumelect1.component';
import { Summech1Component } from './summech1.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		Planned1DemoRoutingModule,
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
	declarations: [
		Planned1DemoComponent,
		Hydraulic1Component,
        Electrical1Component,
        Mechanical1Component,
		Sumhydra1Component,
		Sumelect1Component,
		Summech1Component
	]
})
export class Planned1DemoModule { }
