// src/app/demo/formlayoutdemo.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLayout1DemoComponent } from './formlayout1demo.component';
import { FormLayout1DemoRoutingModule } from './formlayout1demo-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api'; // Import ConfirmationService
import { MessageService } from 'primeng/api';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormLayout1DemoRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    ScrollPanelModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
  ],
  declarations: [FormLayout1DemoComponent],
  providers: [ConfirmationService, MessageService], // Add ConfirmationService to the providers array
})
export class FormLayout1DemoModule {}
