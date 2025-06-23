import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/demo/service/data.service';

@Component({
    templateUrl: './mechanical3.component.html',
})
export class Mechanical3Component {
  constructor(private location: Location, private httpClient: HttpClient, private dataService: DataService) { }

  electricalRows: any[] = [];
  rows: any[] = [];
  showForm = false;
  defaultRowType = 'Mechanical Systems';
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
  isPopupVisible = false;
  selectedDate: Date | null = null;
  dateInformation: any = null;
  isDataSubmitted = false;

  

  goBack(): void {
    this.location.back();
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  submitSchedule() {
    this.isDataSubmitted = true;
    this.updateDateInformation();
    this.hidePopup();
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

  updateCurrentScheduledDay(newScheduledDay: string) {
    this.rows[0].type = newScheduledDay;
  }

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
      checkbox: null,
      reviewedBy: null,
      remarks: null,
      isEditing: false
    };
  }

  addRow() {
    // Check if maintenance description is provided
    if (this.newRow && this.newRow.maintenanceDescription.trim() !== '') {
      this.currentMaxSno++;
      const newRow = {
        press_num: 'P29 - Breakdown ', 
        pm_type: ' Mechanical Systems',
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
  submitForm() {
    this.dataService.submitFormData(this.rows).subscribe(
      (response) => {
        console.log('Form data submitted successfully!', response);
        // Reset form or perform any other action upon successful submission
      },
      (error) => {
        console.error('Error:', error);
        // Handle error accordingly
      }
    );
  }
}