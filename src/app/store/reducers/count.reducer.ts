import {CountActions, countActionsType} from "../actions/count.actions";

export const countNode = 'count'

export interface CountState {
  counter1: number
  counter2: number
}

const initialState: CountState = {
  counter1: -5,
  counter2: 10
}

export const countReducer = (state: CountState = initialState, action: CountActions) => {
  switch (action.type) {
    case countActionsType.change:
      return state
    case countActionsType.increase:
      return {
        ...state,
        counter1: state.counter1 + 1
      }
    case countActionsType.decrease:
      return {
        ...state,
        counter2: state.counter2 - 1
      }
    default:
      return state
  }
}
