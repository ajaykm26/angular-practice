import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';


interface User {
  name: string;
  age: number;
}
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-changedection',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './changedection.component.html',
  styleUrl: './changedection.component.scss'
})
export class ChangedectionComponent {
 user: User = { name: 'Alice', age: 30 };
  counter = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  // BAD: mutates the object - OnPush won't detect this change
  mutateUser(): void {
    this.user.age++;  // Same reference, Angular won't re-render with OnPush
    console.log('Mutated user (OnPush may not detect this):', this.user);
  }

  // GOOD: creates a new object reference - OnPush WILL detect this
  replaceUser(): void {
    this.user = { ...this.user, age: this.user.age + 1 };
  }

  // Manually trigger change detection
  manualDetect(): void {
    this.counter++;
    this.cdr.detectChanges();
  }
}
