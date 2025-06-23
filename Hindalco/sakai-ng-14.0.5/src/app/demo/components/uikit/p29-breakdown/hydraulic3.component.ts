import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/demo/service/data.service';

@Component({
    templateUrl: './hydraulic3.component.html',
})
export class Hydraulic3Component {
  goBack(): void {
    this.location.back();
  }
  isPopupVisible = false;
  selectedDate: Date | null = null;
  dateInformation: any = null;
  isDataSubmitted = false;
  
  showPopup() {
    this.isPopupVisible = true;
  }
  
  submitSchedule() {
    this.isDataSubmitted = true;
    this.updateDateInformation();
  this.hidePopup();

  }
  hidePopup() {
    this.isPopupVisible = false;
  }
  

  onDateSelect(event: any) {
    this.selectedDate = event.target.valueAsDate;
  }
  getWeekNumber(date: Date): number {
    const startOfWeek = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date.getTime() - startOfWeek.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startOfWeek.getDay() + 1) / 7);
  }

  updateDateInformation() {
    if (this.selectedDate && this.isDataSubmitted) {
      const year = new Intl.DateTimeFormat(undefined, { year: 'numeric' }).format(this.selectedDate);
      const month = new Intl.DateTimeFormat(undefined, { month: 'long' }).format(this.selectedDate);
      const day = new Intl.DateTimeFormat(undefined, { day: 'numeric' }).format(this.selectedDate);
      const weekday = new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(this.selectedDate);
      const week = this.getWeekNumber(this.selectedDate);

      this.dateInformation = {
        year,
        month,
        week,
        day,
        weekday,
      };
    }
  }

 

  showForm = false;
  defaultRowType = 'Hydraulics System';
  rows: {
    checkbox: any;
    reviewedBy: any;
    remarks: any;
    type: string;
    sno: string;
    maintenanceDescription: string;
    date: string;
    receivedBy: string;
    approvedBy: string;
    isEditing?: boolean;
  }[] = [];
  newRow: {
    type: string;
    sno: string;
    maintenanceDescription: string;
    date: string;
    receivedBy: string;
    approvedBy: string;
    checkbox: any; // Add checkbox property
    reviewedBy: any; // Add reviewedBy property
    remarks: any; // Add remarks property
    isEditing: boolean;
  } = {
      type: this.defaultRowType,
      sno: '',
      maintenanceDescription: '',
      date: '',
      receivedBy: '',
      approvedBy: '',
      checkbox: null,
      reviewedBy: null,
      remarks: null,
      isEditing: false
    };
  currentMaxSno = 0;
  isNewRowAdded = false;

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.newRow = {
      type: this.defaultRowType,
      sno: '',
      maintenanceDescription: '',
      date: '',
      receivedBy: '',
      approvedBy: '',
      checkbox: null, // Change to null
      reviewedBy: null, // Add reviewedBy property
      remarks: null, // Add remarks property
      isEditing: false
    };
  }

  addRow() {
    // Check if maintenance description is provided
    if (this.newRow && this.newRow.maintenanceDescription.trim() !== '') {
      this.currentMaxSno++;
      const newRow = {
        press_num: 'P29 - Breakdown', 
        pm_type: 'Hydraulics System',
        type: this.defaultRowType,
        sno: this.currentMaxSno.toString(),
        maintenanceDescription: this.newRow.maintenanceDescription,
        date: '',
        receivedBy: '',
        approvedBy: '',
        checkbox: null,
        reviewedBy: null,
        remarks: null,
        isEditing: false,
      };
      this.rows.push(newRow);
      this.isNewRowAdded = true;
      this.closeForm();
    } else {
      // Provide feedback to the user that maintenance description is required
      alert("Please enter Maintenance Description before adding the row.");
    }
  }


  removeLastRow() {
    // Check if there are dynamically added rows to remove
    if (this.rows.length > 0) {
      this.rows.pop();// Remove the last added row
      this.closeForm();
    }
  }




  formData: any[] = [
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Visually Check All pipes, Pipes Connections and system Hoses for Leaks,high temperature,filter by-passing', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Operate press in manual mode and check pressure in mimic', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Clean all the values,block& Perform Hydraulic Value Maintenance if requried', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Clean all the pipe line damp and tighten the damp', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check for leakages in manifold blocks & tapping point', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check the Contamination Levels in Hydraulic System using Realtime monitoring Device', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Inspect Filter Indicators and Inspect its condition.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Listen to the Pumps for any abnormal sound.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check the Main Pump,Pilot Pump and Sealing Pump Delivery Pressure at Pressure checking points.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Inspecting cylinders and actuators.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Ensure that the oil levels are correct and if necessary, fill them up.  ', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check Delta T of heat exchangers.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check any abnormality in Cooling Pump', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check for any abnormal sound & Coupling Condition from Booster Pump.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check for seal damage in Press cylinder,Die Slide,Stub Shear,Side Cylinders.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check for hydraulic hose damages.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Ensure there is no spilled oil or fluid on ground or leaking from the components. ', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check for contamination on breathers.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
    { press_num: 'P29 - Breakdown', pm_type: 'Hydraulics System', date: '', maintenanceDescription: 'Check inside the tanks for signs of possible aeration,sign of leaks or any foarming.', checkbox: false, reviewedBy: '', approvedBy: '', remarks: '' },
  ];



  constructor(private location: Location, private httpClient: HttpClient, private dataService: DataService) { }



  submitForm() {
    const formData = [...this.formData, ...this.rows];
    this.dataService.submitFormData(formData)
      .subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
        },
        (error) => {
          console.error('Error submitting form data:', error);
        }
      );
  }

  resetForm() {
    this.formData.forEach(entry => {
      entry.date = '';
      entry.maintenanceDescription = '';
      entry.checkbox = false;
      entry.reviewedBy = '';
      entry.approvedBy = '';
      entry.remarks = '';
    });
  }
}
