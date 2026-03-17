import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidemoComponentComponent } from './didemo-component.component';

describe('DidemoComponentComponent', () => {
  let component: DidemoComponentComponent;
  let fixture: ComponentFixture<DidemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DidemoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
