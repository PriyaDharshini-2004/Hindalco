import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './breakmech.component.html',
})
export class BreakmechComponent implements OnInit {
    mechanicalBreakdownData: any[] = []; 

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService // Inject your DataService
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getMechanicalBreakdownData();
      }
      getMechanicalBreakdownData() {
        this.dataService.getMechanicalBreakdownData().subscribe(data => {
          this.mechanicalBreakdownData = data; // Assign the fetched data to the property
        });
      }
    }