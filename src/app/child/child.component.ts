
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

/**
 * INTERVIEW TOPIC: @Input, @Output, SimpleChanges
 * Child component that communicates with its parent.
 */

export class ChildComponent implements OnChanges {
  // @Input - receives data from parent via property binding
  @Input() message = '';

  // @Output - emits events to parent via event binding
  @Output() buttonClicked = new EventEmitter<string>();

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // SimpleChanges gives you previousValue, currentValue, firstChange
    for (const propName in changes) {
      const change = changes[propName];
      this.changeLog.push(
        `${propName}: '${change.previousValue}' → '${change.currentValue}'${change.firstChange ? ' (first)' : ''}`
      );
    }
  }

  sendToParent(): void {
    this.buttonClicked.emit(`Message from child at ${new Date().toLocaleTimeString()}`);
  }
}
