import {Component1Component} from "./component1.component";

// @ts-ignore
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
// @ts-ignore
import {TestBed} from "@angular/core/testing";

import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {selectCounter1, selectCounter2} from "../../store/selectors/count.selectors";

describe('Component1Component', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Component1Component
      ],
      providers: [
        provideMockStore({
          initialState: {counter1: -5, counter2: 10 },
          selectors: [
            { selector: selectCounter1, value: -5 },
            { selector: selectCounter2, value: 10 }
          ],
        }),
      ],
      // Не включать в проверку дочерние компоненты(не html элементы).
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });


  it('should create the component1', () => {
    const fixture = TestBed.createComponent(Component1Component);
    fixture.detectChanges();
    const component1 = fixture.componentInstance;
    expect(component1).toBeTruthy();
  });

  it('should set variable of calc() isStarted=true', () => {
    const fixture = TestBed.createComponent(Component1Component);
    fixture.detectChanges();
    const component1 = fixture.componentInstance;
    component1.start();
    expect(component1.isStarted).toBe(true);
  });

  it('should set variable of stop() isStarted=false', () => {
    const fixture = TestBed.createComponent(Component1Component);
    fixture.detectChanges();
    const component1 = fixture.componentInstance;
    component1.stop();
    expect(component1.isStarted).toBe(false);
  });

  it('should set variable of reset() isStarted=false', () => {
    const fixture = TestBed.createComponent(Component1Component);
    fixture.detectChanges();
    const component1 = fixture.componentInstance;
    component1.reset();
    expect(component1.isStarted).toBe(false);
  });


});
