import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Practice';

  navLinks = [
    { path: '/components', label: 'Components & Lifecycle' },
    { path: '/services', label: 'Services & DI' },
    { path: '/forms', label: 'Forms' },
    { path: '/rxjs', label: 'RxJS' },
    { path: '/directives', label: 'Directives' },
    { path: '/pipes', label: 'Pipes' },
    { path: '/routing', label: 'Routing & Guards' }
  ];
}