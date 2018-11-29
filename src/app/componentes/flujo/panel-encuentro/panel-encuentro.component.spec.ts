import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEncuentroComponent } from './panel-encuentro.component';

describe('PanelEncuentroComponent', () => {
  let component: PanelEncuentroComponent;
  let fixture: ComponentFixture<PanelEncuentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelEncuentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEncuentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
