import {Action} from "@ngrx/store";

export enum countActionsType {
  change = '[COUNT] change',
  increase = '[COUNT] increase',
  decrease = '[COUNT] decrease'
}

export class CountChangeAction implements Action {
  readonly type = countActionsType.change
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decrease
}



export type CountActions = CountChangeAction
  | CountIncreaseAction
  | CountDecreaseAction
