import { Component } from '@angular/core';
import { DemoComponentComponent } from '../demo-component/demo-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-component1',
  standalone: true,
  imports: [RouterOutlet, DemoComponentComponent],
  templateUrl: './test-component1.component.html',
  styleUrls: ['./test-component1.component.scss']
})

export class TestComponent1Component {

}
