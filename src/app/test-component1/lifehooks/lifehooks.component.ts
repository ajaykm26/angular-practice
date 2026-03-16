import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-lifehooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifehooks.component.html',
  styleUrls: ['./lifehooks.component.scss']
})
export class LifehooksComponent implements OnInit , OnDestroy,AfterViewInit, DoCheck {

  log: string[] = [];
  counter = 0;
  private intervalId: any;

  constructor() { 
    this.addLog('constructor() - Class instantiated, DI ready');
  }
  ngAfterViewInit(): void {
    this.addLog('ngAfterViewInit() - View initialized');
  }

  ngDoCheck(): void {
    this.addLog('ngDoCheck() - Change detection run');
  }

  ngOnInit(): void {
    this.addLog('LifehooksComponent initialized');
    // Simulate a timer to demonstrate ngOnDestroy cleanup
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy(): void {
    this.addLog('LifehooksComponent destroyed');
    clearInterval(this.intervalId);
    
  }
  private addLog(msg: string): void {
    this.log = [...this.log.slice(-9), `${new Date().toLocaleTimeString()}: ${msg}`];
  }

  clearLog(): void {
    this.log = [];
  }
}
