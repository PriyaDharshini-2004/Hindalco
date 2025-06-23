import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './summech1.component.html',
})
export class Summech1Component  {
mechanicalPlannedData: any[] = [];

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService 
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getMechanicalPlannedData();
      }
      getMechanicalPlannedData() {
        this.dataService.getMechanicalPlannedData().subscribe(data => {
          this.mechanicalPlannedData = data; // Assign the fetched data to the property
        });
      }
    }
