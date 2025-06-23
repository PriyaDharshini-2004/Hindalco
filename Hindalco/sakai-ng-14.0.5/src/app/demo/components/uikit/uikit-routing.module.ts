import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'autocycle', data: { breadcrumb: 'Autocycle' }, loadChildren: () => import('./autocycle/autocycledemo.module').then(m => m.AutocycleDemoModule) },
        { path: 'autocycle1', data: { breadcrumb: 'Autocycle1' }, loadChildren: () => import('./autocycle1/autocycle1demo.module').then(m => m.Autocycle1DemoModule) },
        { path: 'burp', data: { breadcrumb: 'Burp' }, loadChildren: () => import('./burp/burpdemo.module').then(m => m.BurpDemoModule) },
        { path: 'burp1', data: { breadcrumb: 'Burp1' }, loadChildren: () => import('./burp1/burp1demo.module').then(m => m.Burp1DemoModule) },
        { path: 'flow', data: { breadcrumb: 'Flow' }, loadChildren: () => import('./flow/flowdemo.module').then(m => m.FlowDemoModule) },
        { path: 'flow1', data: { breadcrumb: 'Flow1' }, loadChildren: () => import('./flow1/flow1demo.module').then(m => m.Flow1DemoModule) },
        { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./formlayout/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
        { path: 'formlayout1', data: { breadcrumb: 'Form Layout1' }, loadChildren: () => import('./formlayout1/formlayout1demo.module').then(m => m.FormLayout1DemoModule) },
        { path: 'manual', data: { breadcrumb: 'Manual' }, loadChildren: () => import('./manual/manualdemo.module').then(m => m.ManualDemoModule) },
        { path: 'manual1', data: { breadcrumb: 'Manual1' }, loadChildren: () => import('./manual1/manual1demo.module').then(m => m.Manual1DemoModule) },
        { path: 'p11-breakdown', data: { breadcrumb: 'p11-breakdown' }, loadChildren: () => import('./p11-breakdown/breakdemo.module').then(m => m.BreakDemoModule) },
        { path: 'p11-planned', data: { breadcrumb: 'p11-planned' }, loadChildren: () => import('./p11-planned/planneddemo.module').then(m => m.PlannedDemoModule) },
        { path: 'p29-breakdown', data: { breadcrumb: 'p29-breakdown' }, loadChildren: () => import('./p29-breakdown/break1demo.module').then(m => m.Break1DemoModule) },
        { path: 'p29-planned', data: { breadcrumb: 'p29-planned' }, loadChildren: () => import('./p29-planned/planned1demo.module').then(m => m.Planned1DemoModule) },
        { path: 'pressure', data: { breadcrumb: 'Pressure' }, loadChildren: () => import('./pressure/pressuredemo.module').then(m => m.PressureDemoModule) },
        { path: 'pressure1', data: { breadcrumb: 'Pressure1' }, loadChildren: () => import('./pressure1/pressure1.module').then(m => m.Pressure1Module) },
        { path: 'rms', data: { breadcrumb: 'rms' }, loadChildren: () => import('./rms/rmsdemo.module').then(m => m.RmsDemoModule) },
        { path: 'rms1', data: { breadcrumb: 'rms1' }, loadChildren: () => import('./rms1/rms1demo.module').then(m => m.Rms1DemoModule) },
        { path: 'pump1', data: { breadcrumb: 'Pump1' }, loadChildren: () => import('./pump1/pump1.module').then(m => m.Pump1Module) },
        { path: 'pump2', data: { breadcrumb: 'Pump2' }, loadChildren: () => import('./pump2/pump2.module').then(m => m.Pump2Module) },
        { path: 'pump3', data: { breadcrumb: 'Pump3' }, loadChildren: () => import('./pump3/pump3.module').then(m => m.Pump3Module) },
        { path: 'siderod', data: { breadcrumb: 'Siderod' }, loadChildren: () => import('./siderod/siderod.module').then(m => m.SiderodModule) },
        { path: 'sidebore', data: { breadcrumb: 'Sidebore' }, loadChildren: () => import('./sidebore/sidebore.module').then(m => m.SideboreModule) },
        { path: 'shearrod', data: { breadcrumb: 'Shearrod' }, loadChildren: () => import('./shearrod/shearrod.module').then(m => m.ShearrodModule) },
        { path: 'consealbore', data: { breadcrumb: 'Consealbore' }, loadChildren: () => import('./consealbore/consealbore.module').then(m => m.ConsealboreModule) },
        
        { path: 'ppump1', data: { breadcrumb: 'Ppump1' }, loadChildren: () => import('./ppump1/ppump1.module').then(m => m.Ppump1Module) },
        { path: 'ppump2', data: { breadcrumb: 'Ppump2' }, loadChildren: () => import('./ppump2/ppump2.module').then(m => m.Ppump2Module) },
        { path: 'ppump3', data: { breadcrumb: 'Ppump3' }, loadChildren: () => import('./ppump3/ppump3.module').then(m => m.Ppump3Module) },
        { path: 'ppump4', data: { breadcrumb: 'Ppump4' }, loadChildren: () => import('./ppump4/ppump4.module').then(m => m.Ppump4Module) },

        { path: 'ssiderod', data: { breadcrumb: 'Ssiderod' }, loadChildren: () => import('./ssiderod/ssiderod.module').then(m => m.SsiderodModule) },
        { path: 'ssidebore', data: { breadcrumb: 'Ssidebore' }, loadChildren: () => import('./ssidebore/ssidebore.module').then(m => m.SsideboreModule) },
        { path: 'sshearbore', data: { breadcrumb: 'Sshearbore' }, loadChildren: () => import('./sshearbore/sshearbore.module').then(m => m.SshearboreModule) },
        { path: 'cconsealrod', data: { breadcrumb: 'Cconsealrod' }, loadChildren: () => import('./cconsealrod/cconsealrod.module').then(m => m.CconsealrodModule) },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
