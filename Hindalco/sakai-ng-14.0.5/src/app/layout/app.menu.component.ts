import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Menu',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Press', icon: 'pi pi-fw pi-sliders-v', routerLink: ['/uikit/formlayout'] ,
                },
                    {
                        label: 'Sequence Chart', icon: 'pi pi-fw pi-chart-bar', 
                        items: [
                            {
                                label: 'P11', icon: 'your-p1-icon',  
                                items: [
                                    { label: 'Auto Cycle', icon: '', routerLink: ['/uikit/autocycle'] },
                                    { label: 'Burp', icon: '', routerLink: ['/uikit/burp'] },
                                    { label: 'Manual Sequence', icon: '', routerLink: ['/uikit/manual'] }
                                ]
                            },
                            {
                                label: 'P29', icon: 'your-p1-icon',  
                                items: [
                                    { label: 'Auto Cycle', icon: '', routerLink: ['/uikit/autocycle1'] },
                                    { label: 'Burp', icon: '', routerLink: ['/uikit/burp1'] },
                                    { label: 'Manual Sequence', icon: '', routerLink: ['/uikit/manual1'] }
                                ]
                            },
                        ]
                    },                   
                    {
                        label: 'Report', icon: 'pi pi-fw pi-list', 
                        items: [
                            {
                                label: 'P11', icon: 'your-p1-icon',  
                                items: [
                                    { label: 'Pressure', icon: 'your-pressure-icon', routerLink: ['/uikit/pressure'] },
                                    { label: 'Flow', icon: 'your-flow-icon', routerLink: ['/uikit/flow'] },
                                    { label: 'RMS Encoder', icon: 'your-rms-icon', routerLink: ['/uikit/rms'] }
                                ]
                            },
                            {
                                label: 'P29', icon: 'your-p1-icon', 
                                items: [
                                    { label: 'Pressure', icon: 'your-pressure-icon', routerLink: ['/uikit/pressure1'] },
                                    { label: 'Flow', icon: 'your-flow-icon', routerLink: ['/uikit/flow1'] },
                                    { label: 'RMS Encoder', icon: 'your-rms-icon', routerLink: ['/uikit/rms1'] }
                                ]
                            },
                        ]
                    },
                    { 
                        label: 'Maintenance', icon: 'pi pi-fw pi-cog', routerLink: ['/uikit/invalidstate'],
                        items: [
                            {
                                label: 'P11', icon: 'your-p1-icon',  
                                items: [
                                    { label: 'Planned', icon: 'your-pressure-icon', routerLink: ['/uikit/p11-planned'] },
                                    { label: 'Breakdown', icon: 'your-flow-icon', routerLink: ['/uikit/p11-breakdown'] },
                                ]
                            },
                            {
                                label: 'P29', icon: 'your-p1-icon', 
                                items:[
                                    { label: 'Planned', icon: 'your-pressure-icon', routerLink: ['/uikit/p29-planned'] },
                                    { label: 'Breakdown', icon: 'your-flow-icon', routerLink: ['/uikit/p29-breakdown'] },
                                ]
                            },
                        ]
                    }
                ]
            },
        ];
    }
}
