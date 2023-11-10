import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterdropComponent } from './waterdrop.component';

describe('WaterdropComponent', () => {
  let component: WaterdropComponent;
  let fixture: ComponentFixture<WaterdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterdropComponent]
    });
    fixture = TestBed.createComponent(WaterdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
