// src/app/demo/service/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://192.168.0.105:3000';

  constructor(private http: HttpClient) {}



    //socket db
    insertP11Data(data: any): Observable<any> {
      return this.http.post('http://192.168.0.105:3000/api/insertp11datasocket', data);
    }
    
    insertP29Data(data: any): Observable<any> {
      return this.http.post('http://192.168.0.105:3000/api/insertp29datasocket', data);
    }

    insertP11Dataflow(data: any): Observable<any> {
      return this.http.post('http://192.168.0.105:3000/api/insertp11dataflowsocket', data);
    }
    
    insertP29Dataflow(data: any): Observable<any> {
      return this.http.post('http://192.168.0.105:3000/api/insertp29dataflowsocket', data);
    }
//graph p11


  getPump1DataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphpump1`);
  }
  
  getPump2DataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphpump2`);
  }

  getPump3DataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphpump3`);
  }

  getSiderodDataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphsiderod`);
  }

  getSideboreDataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphsidebore`);
  }

  getShearrodDataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphshearrod`);
  }

  getConsealboreDataGraph(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/graphconsealbore`);
  }


  

//graph p29
getPump1DataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1pump1`);
}

getPump2DataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1pump2`);
}

getPump3DataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1pump3`);
}

getPump4DataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1pump4`);
}
getSiderodDataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1siderod`);
}

getSideboreDataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1sidebore`);
}

getShearboreDataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1shearbore`);
}

getConsealrodDataGraph1(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/api/graph1consealrod`);
}

  
//mainrenance  
  submitFormData(formData: any[]): Observable<any> {
    return this.http.post('http://192.168.0.105:3000/submit', formData, { responseType: 'text' });
  }
  getFilteredData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filtered-data`);
  }
  getElectricalData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/electrical-data`)
  }
  getMechanicalData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/mechanical-data`)
  }

  getBreakdownData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/breakdown-data`);
  }
 
  getElectricalBreakdownData(): Observable<any[]> { 
    return this.http.get<any[]>(`${this.apiUrl}/electrical-breakdown-data`);
  }

  getMechanicalBreakdownData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/mechanical-breakdown-data`);
  }

  getHydraulicPlannedData(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/hydraulic-planned-data`);
}

getElectricalPlannedData(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/electrical-planned-data`);
}

getMechanicalPlannedData(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/mechanical-planned-data`);
}

getHydraulicBreakdownData(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/hydraulic-breakdown-data`);
}

getElectricalsBreakdownData(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/electricals-breakdown-data`);
}

getMechanicalsBreakdownData(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/mechanicals-breakdown-data`);
}




//p11-pressure
  getPump1PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump1/pressure`);
  }

  getPump2PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump2/pressure`);
  }

  getPump3PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump3/pressure`);
  }

  getPump4PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/cc1/pressure`);
  }

  getPump5PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/sc1/pressure`);
  }

  getPump6PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/mc1/pressure`);
  }
//p11-flow
  getPump1FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump1/flow`);
  }

  getPump2FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump2/flow`);
  }

  getPump3FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump3/flow`);
  }

  getPump4FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/cd1/flow`);
  }

//p29-pressure
  getPump1Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump1/pressure1`);
  }

  getPump2Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump2/pressure1`);
  }

  getPump3Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump3/pressure1`);
  }

  getPump4Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump4/pressure1`);
  }

  getPump5Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/cc2/pressure1`);
  }

  getPump6Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/sc2/pressure1`);
  }

  getPump7Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/mc2/pressure1`);
  }
  //p29-flow
  getPump1Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump1/flow1`);
  }

  getPump2Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump2/flow1`);
  }

  getPump3Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump3/flow1`);
  }

  getPump4Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/pump4/flow1`);
  }

  getPump5Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/cd2/flow1`);
  }

  //table-p11-pressure
  getTable1PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table1/pressure`);
  }
  getTable2PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table2/pressure`);
  }
  getTable3PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table3/pressure`);
  }
  getTable4PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table4/pressure`);
  }
  getTable5PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table5/pressure`);
  }
  getTable6PressureData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table6/pressure`);
  }

  //table-p11-flow
  getTable1FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table1/flow`);
  }
  getTable2FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table2/flow`);
  }
  getTable3FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table3/flow`);
  }
  getTable4FlowData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table4/flow`);
  }


//p29-pressure-table
  getTable1Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table1/pressure1`);
  }
  getTable2Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table2/pressure1`);
  }
  getTable3Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table3/pressure1`);
  }
  getTable4Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table4/pressure1`);
  }
  getTable5Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table5/pressure1`);
  }
  getTable6Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table6/pressure1`);
  }
  getTable7Pressure1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table7/pressure1`);
  }

  //p29-flow-table
  getTable1Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table1/flow1`);
  }
  getTable2Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table2/flow1`);
  }
  getTable3Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table3/flow1`);
  }
  getTable4Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table4/flow1`);
  }
  getTable5Flow1Data(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/data/table5/flow1`);
  }
}
