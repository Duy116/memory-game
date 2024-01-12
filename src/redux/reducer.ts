import { combineReducers } from '@reduxjs/toolkit';
import { peopleReducer } from './people-slice';
import { scoreReducer } from './score-slice';

const rootReducer = combineReducers({
  people: peopleReducer,
  score: scoreReducer
});

export default rootReducer;
