import { Component } from '@angular/core';
import { Routes } from '@angular/router';



@Component({
  selector: 'app-service-demo-home',
  standalone: true,
  imports: [],
  templateUrl: './service-demo-home.component.html',
  styleUrl: './service-demo-home.component.scss'
})




export class ServiceDemoHomeComponent {

}

const routes : Routes=[
  { path: '', component: ServiceDemoHomeComponent },
  { path: 'di', loadComponent: () => import('../di-demo.component/didemo-component.component').then(m => m.DidemoComponentComponent) }
];
