import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesHomeComponent } from './botones-home.component';

describe('BotonesHomeComponent', () => {
  let component: BotonesHomeComponent;
  let fixture: ComponentFixture<BotonesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
