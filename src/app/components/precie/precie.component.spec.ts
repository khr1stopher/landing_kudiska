import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecieComponent } from './precie.component';

describe('PrecieComponent', () => {
  let component: PrecieComponent;
  let fixture: ComponentFixture<PrecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
