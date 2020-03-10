import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreAEmpresaComponent } from './sobre-a-empresa.component';

describe('SobreAEmpresaComponent', () => {
  let component: SobreAEmpresaComponent;
  let fixture: ComponentFixture<SobreAEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreAEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreAEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
