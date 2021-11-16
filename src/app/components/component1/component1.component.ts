import { Component, OnInit } from '@angular/core';
import {CountState} from "../../store/reducers/count.reducer";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCounter1, selectCounter2} from "../../store/selectors/count.selectors";
import {CountChangeAction} from "../../store/actions/count.actions";

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
    console.log("Start")
    this.store$.dispatch(new CountChangeAction())
  }

}
