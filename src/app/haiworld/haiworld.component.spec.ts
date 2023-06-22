import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiworldComponent } from './haiworld.component';

describe('HaiworldComponent', () => {
  let component: HaiworldComponent;
  let fixture: ComponentFixture<HaiworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaiworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
