import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPComponent } from './modificar-p.component';

describe('ModificarPComponent', () => {
  let component: ModificarPComponent;
  let fixture: ComponentFixture<ModificarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
