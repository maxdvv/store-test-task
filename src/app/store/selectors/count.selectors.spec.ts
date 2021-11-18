import {CountState} from "../reducers/count.reducer";
import {selectCounter1, selectCounter2} from "./count.selectors";

describe("Selectors", () => {
  const initialState: CountState = {
    counter1: -5,
    counter2: 10
  };

  it("should select counter1", () => {
    const result = selectCounter1.projector(initialState);
    expect(result).toBe(-5);
  });

  it("should select counter2", () => {
    const result = selectCounter2.projector(initialState);
    expect(result).toEqual(10);
  });

});
