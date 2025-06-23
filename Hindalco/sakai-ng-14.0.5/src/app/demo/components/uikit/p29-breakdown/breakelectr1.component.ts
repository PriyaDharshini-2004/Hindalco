import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './breakelectr1.component.html',
})
export class Breakelectr1Component  {
electricalsBreakdownData: any[] = [];

    
    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService 
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getElectricalsBreakdownData();
      }
      getElectricalsBreakdownData() {
        this.dataService.getElectricalsBreakdownData().subscribe(data => {
          this.electricalsBreakdownData = data; // Assign the fetched data to the property
        });
      }
    }


