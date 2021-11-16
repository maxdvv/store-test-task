import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {countActionsType, CountDecreaseAction, CountIncreaseAction} from "../actions/count.actions";
import {tap} from "rxjs";
import {Store} from "@ngrx/store";
import {CountState} from "../reducers/count.reducer";

@Injectable()
export class CountEffects {
  constructor(private actions$: Actions, private store$: Store<CountState>) {
  }

  @Effect( {dispatch: false} )

  changeCounters$ = this.actions$.pipe(
    ofType(countActionsType.change),
      tap(() => {
        this.store$.dispatch(new CountIncreaseAction());
        this.store$.dispatch(new CountDecreaseAction());
        this.store$.dispatch(new CountDecreaseAction());
      }));

}
