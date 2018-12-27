import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonldComponent } from './jsonld.component';

describe('JsonldComponent', () => {
  let component: JsonldComponent;
  let fixture: ComponentFixture<JsonldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
