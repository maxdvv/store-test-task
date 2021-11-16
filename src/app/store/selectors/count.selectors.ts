import {countNode, CountState} from "../reducers/count.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectCountFeature = createFeatureSelector<CountState>(countNode)

export const selectCounter1 = createSelector(
  selectCountFeature,
  (state: CountState): number => state.counter1
)

export const selectCounter2 = createSelector(
  selectCountFeature,
  (state: CountState): number => state.counter1
)
