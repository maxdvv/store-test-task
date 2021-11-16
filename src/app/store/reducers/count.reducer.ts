
export const countNode = 'count'

export interface CountState {
  counter1: number
  counter2: number
}

const initialState: CountState = {
  counter1: -5,
  counter2: 10
}

export const countReducer = (state: CountState = initialState, action: any) => {
 return state
}
