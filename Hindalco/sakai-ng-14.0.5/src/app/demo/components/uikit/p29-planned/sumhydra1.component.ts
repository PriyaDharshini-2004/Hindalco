import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './sumhydra1.component.html',
})
export class Sumhydra1Component implements OnInit {
hydraulicPlannedData: any[] = []; 
   

constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService // Inject your DataService
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getHydraulicPlannedData();
      }
      getHydraulicPlannedData() {
        this.dataService.getHydraulicPlannedData().subscribe(data => {
          this.hydraulicPlannedData = data; // Assign the fetched data to the property
        });
      }
    }