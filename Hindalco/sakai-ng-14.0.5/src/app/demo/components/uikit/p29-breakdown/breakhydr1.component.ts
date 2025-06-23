import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './breakhydr1.component.html',
})
export class Breakhydr1Component  {
hydraulicBreakdownData: any[] = [];

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService 
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getHydraulicBreakdownData();
      }
      getHydraulicBreakdownData() {
        this.dataService.getHydraulicBreakdownData().subscribe(data => {
          this.hydraulicBreakdownData = data; // Assign the fetched data to the property
        });
      }
    }



