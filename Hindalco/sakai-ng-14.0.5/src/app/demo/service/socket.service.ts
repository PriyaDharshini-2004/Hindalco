import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {
    this.socket.on('connect', () => {
      console.log('Socket connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
  }

  // Listen for 'pressure_data' event from the Flask server
  getNewData(): Observable<any> {
    return this.socket.fromEvent<any>('pressure_data');
  }

  getNewDataflow(): Observable<any> {
    return this.socket.fromEvent<any>('flow_data');
  }
}
