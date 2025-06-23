import { SocketService } from 'src/app/demo/service/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p29code',
  templateUrl: './formlayout1demo.component.html',
})
export class FormLayout1DemoComponent implements OnInit {
  newData: any = {};

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    // Subscribe to the new_data event
    this.socketService.getNewData().subscribe((data: any) => {
      console.log('Received data from server:', data);

      // Parse the received data
      if (data && data.data) {
        this.newData = this.parseDataString(data.data);
      }
    });
  }

  // Function to parse the data string into an object
  parseDataString(dataStr: string): any {
    const dataObject: any = {};
    const entries = dataStr.split(', ').map(entry => entry.split(': '));
    entries.forEach(([key, value]) => {
      dataObject[key] = value;
    });
    return dataObject;
  }
}
