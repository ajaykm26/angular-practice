import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedectionComponent } from './changedection.component';

describe('ChangedectionComponent', () => {
  let component: ChangedectionComponent;
  let fixture: ComponentFixture<ChangedectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangedectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangedectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
