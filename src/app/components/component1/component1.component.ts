import { Component, OnInit } from '@angular/core';
import {CountState} from "../../store/reducers/count.reducer";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCounter1, selectCounter2} from "../../store/selectors/count.selectors";
import {CountChangeAction, CountResetAction} from "../../store/actions/count.actions";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  // public counter1$: Observable<number> = this.store$.pipe(select(selectCounter1))
  // public counter2$: Observable<number> = this.store$.pipe(select(selectCounter2))

  public counter1!: number
  public counter2!: number
  public timerId!: number
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
    console.log("Start")
    this.timerId = setInterval(() => this.store$.dispatch(new CountChangeAction()), 1000);
  }

  stop() {
    this.isStarted = false
    console.log("Stop")
    clearInterval(this.timerId)
  }
  reset() {
    this.isStarted = false
    console.log("Reset")
    clearInterval(this.timerId)
    this.store$.dispatch(new CountResetAction())

  }
}
