import { Component } from '@angular/core';
import { Routes, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LifehooksComponent } from '../test-component1/lifehooks/lifehooks.component';

export const routes: Routes = [
  { path: 'lifecycle', component: LifehooksComponent }
];

@Component({
  selector: 'app-demo-component',
  standalone: true,
  imports: [LifehooksComponent, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.scss']
})
export class DemoComponentComponent {
  topics = [
    { title: 'Lifecycle Hooks', path: 'lifecycle', desc: 'ngOnInit, ngOnChanges, ngOnDestroy, etc.' },
    { title: '@Input / @Output', path: 'input-output', desc: 'Parent-child communication, EventEmitter' },
    { title: 'Change Detection', path: 'change-detection', desc: 'Default vs OnPush strategy' }
  ];
}
