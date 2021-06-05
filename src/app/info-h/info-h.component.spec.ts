import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHComponent } from './info-h.component';

describe('InfoHComponent', () => {
  let component: InfoHComponent;
  let fixture: ComponentFixture<InfoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
