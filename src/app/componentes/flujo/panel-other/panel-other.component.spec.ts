import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOtherComponent } from './panel-other.component';

describe('PanelOtherComponent', () => {
  let component: PanelOtherComponent;
  let fixture: ComponentFixture<PanelOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
