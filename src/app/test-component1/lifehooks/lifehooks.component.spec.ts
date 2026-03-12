import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifehooksComponent } from './lifehooks.component';

describe('LifehooksComponent', () => {
  let component: LifehooksComponent;
  let fixture: ComponentFixture<LifehooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifehooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
