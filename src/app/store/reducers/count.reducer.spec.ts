import * as fromReducer from './count.reducer';
import * as fromAction from '../actions/count.actions';
import {CountActions} from "../actions/count.actions";


  describe('CountReducer', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {};
      const state = fromReducer.countReducer(undefined, <CountActions>action);

      expect(state).toEqual(initialState);
    });
  });

  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.countReducer(initialState, <CountActions>action);

      expect(state).toBe(initialState);
    });
  });

  describe('CountChangeAction action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;

      const action = new fromAction.CountChangeAction();
      const state = fromReducer.countReducer(initialState, action);

      expect(state).toBe(initialState);

    });
  });

  describe('CountIncreaseAction action', () => {
    it('should return counter1 increased by 1', () => {
      const { initialState } = fromReducer;
      const newState = {
          counter1: -4,
          counter2: 10
      }

      const action = new fromAction.CountIncreaseAction();
      const state = fromReducer.countReducer(initialState, action);

      expect(state.counter1).toBe(newState.counter1);

    });
  });

  describe('CountDecreaseAction action', () => {
    it('should return counter2 decreased by 1', () => {
      const { initialState } = fromReducer;
      const newState = {
        counter1: -5,
        counter2: 9
      }

      const action = new fromAction.CountDecreaseAction();
      const state = fromReducer.countReducer(initialState, action);

      expect(state.counter2).toBe(newState.counter2);

    });
  });

  describe('CountResetAction action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;

      const action = new fromAction.CountResetAction();
      const state = fromReducer.countReducer(initialState, action);

      expect(state).toEqual(initialState);

    });
  });
