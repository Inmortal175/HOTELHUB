import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircGraphicComponent } from './circ-graphic.component';

describe('CircGraphicComponent', () => {
  let component: CircGraphicComponent;
  let fixture: ComponentFixture<CircGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
