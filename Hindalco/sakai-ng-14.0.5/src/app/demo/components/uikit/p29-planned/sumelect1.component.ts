import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './sumelect1.component.html',
})
export class Sumelect1Component  {
    
electricalPlannedData: any[] = []; 

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService 
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getElectricalPlannedData();
      }
      getElectricalPlannedData() {
        this.dataService.getElectricalPlannedData().subscribe(data => {
          this.electricalPlannedData = data; // Assign the fetched data to the property
        });
      }
    }
