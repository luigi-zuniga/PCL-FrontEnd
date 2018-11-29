import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConcursoComponent } from './panel-concurso.component';

describe('PanelConcursoComponent', () => {
  let component: PanelConcursoComponent;
  let fixture: ComponentFixture<PanelConcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelConcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
