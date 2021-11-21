import {Component1Component} from "./component1.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {TestBed} from "@angular/core/testing";

describe('Component1Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Component1Component
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the component1', () => {
    const fixture = TestBed.createComponent(Component1Component);
    fixture.detectChanges();
    const component2 = fixture.componentInstance;
    expect(component2).toBeTruthy();
  });

});
