import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [FormsModule,ChildComponent,CommonModule],
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  messageToChild = 'Hello from Parent!';
  receivedFromChild = '';
  childClickCount = 0;

   onChildClicked(event: string): void {
    this.receivedFromChild = event;
    this.childClickCount++;
  }
}
