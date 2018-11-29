import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailContenidoComponent } from './thumbnail-contenido.component';

describe('ThumbnailContenidoComponent', () => {
  let component: ThumbnailContenidoComponent;
  let fixture: ComponentFixture<ThumbnailContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
