import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './breakelectr.component.html',
})
export class BreakelectrComponent implements OnInit  {
    electricalBreakdownData: any[] = []; 
    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService // Inject your DataService
      ) { }

      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getElectricalBreakdownData();
      }
      getElectricalBreakdownData() {
        this.dataService.getElectricalBreakdownData().subscribe(data => {
          this.electricalBreakdownData = data; // Assign the fetched data to the property
        });
      }
    }
