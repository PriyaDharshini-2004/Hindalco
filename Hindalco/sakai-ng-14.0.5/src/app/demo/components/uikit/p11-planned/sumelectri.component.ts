import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DataService } from 'src/app/demo/service/data.service'; 

@Component({
    templateUrl: './sumelectri.component.html',
})
export class sumelectriComponent implements OnInit {
 electricalData: any[] | undefined;
    

    constructor(
        private http: HttpClient,
        private location: Location,
        private dataService: DataService // Inject your DataService
      ) { }


      goBack(): void {
        this.location.back();
      }
      ngOnInit() {
        this.getElectricalData();

          
      }
      getElectricalData() {
        this.dataService.getElectricalData().subscribe(data => {
          this.electricalData = data;
        });
      }
    }
