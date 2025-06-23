import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/demo/service/data.service'; // Updated import
import { SocketService } from 'src/app/demo/service/socket.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formlayoutdemo',
  templateUrl: './formlayoutdemo.component.html',
})
export class FormLayoutDemoComponent implements OnInit, OnDestroy {
  p11Data: any = {};
  p29Data: any = {};
  showP11: boolean = true; // Flag to toggle between P11 and P29
  private dataSubscription: Subscription = new Subscription();
  p29Dataflow: any = {};
  p11Dataflow: any = {};

  constructor(private router: Router, private dataService: DataService, private socketService: SocketService) { }

  ngOnInit(): void {
    // Subscribe to socket data
    this.dataSubscription.add(
      this.socketService.getNewData().subscribe((data: any) => {
        this.handleData(data);
      })
    );
    // Subscribe to socket data
    this.dataSubscription.add(
      this.socketService.getNewDataflow().subscribe((data: any) => {
       this.handleDataflow(data);
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.dataSubscription.unsubscribe();
  }

  handleData(data: any): void {
    console.log('Received data from server:', data);
  
    // Use the raw timestamp from the data if available
    const timestamp = data.timestamp || new Date().toISOString();
  
    // Ensure the data is parsed correctly
    const parsedData = this.parsePressureData(data.data);
  
    if (Object.keys(parsedData).length === 0) {
      console.warn('Parsed data is empty:', parsedData);
      return;
    }
  
    if (data.data.startsWith('press11 pressure')) {
      this.p11Data = { ...parsedData, timestamp }; // Include the original timestamp
      console.log('Sending P11 data:', this.p11Data);
      this.insertP11Data();
    } else if (data.data.startsWith('press29 pressure')) {
      this.p29Data = { ...parsedData, timestamp }; // Include the original timestamp
      console.log('Sending P29 data:', this.p29Data);
      this.insertP29Data();
    }else {
      console.warn('Unknown pressure type');
    }
  }


  handleDataflow(data: any): void {
    console.log('Received data from server:', data);

    // Ensure the correct key is used to access flow data
    const flowString = data.flow; 

    if (!flowString) {
        console.warn('No flow data received:', data);
        return;
    }

    // Extract timestamp or use the current time
    const timestamp = data.timestamp || new Date().toISOString();

    // Parse the flow data correctly
    const parsedData = this.parseFlowData(flowString);

    if (Object.keys(parsedData).length === 0) {
        console.warn('Parsed data is empty:', parsedData);
        return;
    }

    // Check which type of flow data is received and update accordingly
    if (flowString.startsWith('press11 flow')) {
        this.p11Dataflow = { ...parsedData, timestamp };
        console.log('Sending P11 Flow data:', this.p11Dataflow);
        this.insertP11Dataflow();  
    } else if (flowString.startsWith('press29 flow')) {
        this.p29Dataflow = { ...parsedData, timestamp };
        console.log('Sending P29 Flow data:', this.p29Dataflow);
        this.insertP29Dataflow();  
    } else {
        console.warn('Unknown flow type:', flowString);
    }
}
  
  parsePressureData(dataStr: string): any {
    const dataObject: any = {};
    try {
      const entries = dataStr.split(', ').map(entry => entry.split(': '));
      entries.forEach(([key, value]) => {
        if (key && value) {
          const cleanKey = key.trim().replace(' ', '_').toLowerCase(); // Normalize keys
          dataObject[cleanKey] = isNaN(parseFloat(value)) ? value : parseFloat(value); // Preserve value types
        }
      });
    } catch (error) {
      console.error('Error parsing pressure data:', error);
    }
    console.log('Parsed pressure data:', dataObject);
    return dataObject;
  }


  
  parseFlowData(dataStr: string): any {
    const dataObject: any = {};
    try {
      const entries = dataStr.split(', ').map(entry => entry.split(': '));
      entries.forEach(([key, value]) => {
        if (key && value) {
          const cleanKey = key.trim().replace(' ', '_').toLowerCase(); // Normalize keys
          dataObject[cleanKey] = isNaN(parseFloat(value)) ? value : parseFloat(value); // Preserve value types
        }
      });
    } catch (error) {
      console.error('Error parsing pressure data:', error);
    }
    console.log('Parsed pressure data:', dataObject);
    return dataObject;
  }

  //pressure
  insertP11Data(): void {
    if (this.p11Data && Object.keys(this.p11Data).length > 0) {
      this.dataService.insertP11Data(this.p11Data).subscribe(
        response => {
          console.log('P11 data inserted successfully:', response);
        },
        error => {
          console.error('Error inserting P11 data:', error);
        }
      );
    }
  }

  insertP29Data(): void {
    if (this.p29Data && Object.keys(this.p29Data).length > 0) {
      this.dataService.insertP29Data(this.p29Data).subscribe(
        response => {
          console.log('P29 data inserted successfully:', response);
        },
        error => {
          console.error('Error inserting P29 data:', error);
        }
      );
    }
  }

  //flow
  insertP11Dataflow(): void {
    if (this.p11Dataflow && Object.keys(this.p11Dataflow).length > 0) {
      this.dataService.insertP11Dataflow(this.p11Dataflow).subscribe(
        response => {
          console.log('P11 flow data inserted successfully:', response);
        },
        error => {
          console.error('Error inserting P11 flow data:', error);
        }
      );
    }
  }


  insertP29Dataflow(): void {
    if (this.p29Dataflow && Object.keys(this.p29Dataflow).length > 0) {
      this.dataService.insertP29Dataflow(this.p29Dataflow).subscribe(
        response => {
          console.log('P29 data inserted successfully:', response);
        },
        error => {
          console.error('Error inserting P29 data:', error);
        }
      );
    }
  }




  toggleData(showP11: boolean): void {
    this.showP11 = showP11;
  }

  // Navigation methods
  pump1(): void {
    this.router.navigate(['/uikit/pump1']); // Replace '/target-page' with your desired route
  }
  pump2(): void {
    this.router.navigate(['/uikit/pump2']); // Replace '/target-page' with your desired route
  }
  pump3(): void {
    this.router.navigate(['/uikit/pump3']); // Replace '/target-page' with your desired route
  }
  siderod(): void {
    this.router.navigate(['/uikit/siderod']); // Replace '/target-page' with your desired route
  }
  sidebore(): void {
    this.router.navigate(['/uikit/sidebore']); // Replace '/target-page' with your desired route
  }
  shearrod(): void {
    this.router.navigate(['/uikit/shearrod']); // Replace '/target-page' with your desired route
  }
  consealbore(): void {
    this.router.navigate(['/uikit/consealbore']); // Replace '/target-page' with your desired route
  }

  ppump1(): void {
    this.router.navigate(['/uikit/ppump1']); // Replace '/target-page' with your desired route
  }
  ppump2(): void {
    this.router.navigate(['/uikit/ppump2']); // Replace '/target-page' with your desired route
  }
  ppump3(): void {
    this.router.navigate(['/uikit/ppump3']); // Replace '/target-page' with your desired route
  }
  ppump4(): void {
    this.router.navigate(['/uikit/ppump4']); // Replace '/target-page' with your desired route
  }
  ssiderod(): void {
    this.router.navigate(['/uikit/ssiderod']); // Replace '/target-page' with your desired route
  }
  ssidebore(): void {
    this.router.navigate(['/uikit/ssidebore']); // Replace '/target-page' with your desired route
  }
  sshearbore(): void {
    this.router.navigate(['/uikit/sshearbore']); // Replace '/target-page' with your desired route
  }
  cconsealrod(): void {
    this.router.navigate(['/uikit/cconsealrod']); // Replace '/target-page' with your desired route
  }
}
