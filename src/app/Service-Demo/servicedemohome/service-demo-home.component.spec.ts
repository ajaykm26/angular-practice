import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDemoHomeComponent } from './service-demo-home.component';

describe('ServiceDemoHomeComponent', () => {
  let component: ServiceDemoHomeComponent;
  let fixture: ComponentFixture<ServiceDemoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDemoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
