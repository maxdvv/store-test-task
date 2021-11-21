import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {selectCounter1, selectCounter2} from "./store/selectors/count.selectors";

describe('AppComponent', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'store-test-task'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('store-test-task');
  });

  it('should set variable of calc() isStarted=true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.start();
    expect(app.isStarted).toBe(true);
  });

  it('should set variable of stop() isStarted=false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.stop();
    expect(app.isStarted).toBe(false);
  });

  it('should set variable of reset() isStarted=false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    app.reset();
    expect(app.isStarted).toBe(false);
  });

});
