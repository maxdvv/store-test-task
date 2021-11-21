import {Component2Component} from "./component2.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {TestBed} from "@angular/core/testing";

describe('Component2Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Component2Component
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the component2', () => {
    const fixture = TestBed.createComponent(Component2Component);
    fixture.detectChanges();
    const component2 = fixture.componentInstance;
    expect(component2).toBeTruthy();
  });

});
