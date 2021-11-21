import { Component } from '@angular/core';
import {interval, takeWhile, tap} from "rxjs";
import {select, Store} from "@ngrx/store";
import {CountChangeAction, CountResetAction} from "./store/actions/count.actions";
import {CountState} from "./store/reducers/count.reducer";
import {selectCounter1, selectCounter2} from "./store/selectors/count.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-test-task';

  public counter1: number | undefined
  public counter2: number | undefined
  public isStarted: boolean = false

  constructor(private store$: Store<CountState>) { }

  ngOnInit(): void {
    this.store$.pipe(select(selectCounter1)).subscribe(
      (counter1) => {
        this.counter1 = counter1
      }
    )

    this.store$.pipe(select(selectCounter2)).subscribe(
      (counter2) => {
        this.counter2 = counter2
      }
    )
  }

  start() {
    this.isStarted = true

    interval(1000).pipe(
      takeWhile(() => this.isStarted),
      tap( () => this.store$.dispatch(new CountChangeAction()))
    ).subscribe()
  }

  stop() {
    this.isStarted = false
  }

  reset() {
    this.isStarted = false
    this.store$.dispatch(new CountResetAction())
  }
}
