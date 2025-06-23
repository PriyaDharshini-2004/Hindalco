import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlannedDemoComponent } from './planneddemo.component';
import { PlannedDemoRoutingModule } from './planneddemo-routing.module';
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
import { HydraulicComponent } from './hydraulic.component';
import { ElectricalComponent } from './electrical.component';
import { MechanicalComponent } from './mechanical.component';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { SumhydrComponent } from './sumhydr.component';
import { sumelectriComponent } from './sumelectri.component';
import { SummechComponent } from './summech.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		CheckboxModule,
		PlannedDemoRoutingModule,
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
		PlannedDemoComponent,
		HydraulicComponent,
        ElectricalComponent,
        MechanicalComponent,
		SumhydrComponent,
		sumelectriComponent,
		SummechComponent
	]
})
export class PlannedDemoModule { }
