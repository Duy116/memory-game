import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  highScores: [
    0
  ]
}

export const score = createSlice({
  name: 'score',
  initialState,
  reducers: {

  }
})

export const scoreReducer = score.reducer