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
    resetScore: (state) => {
      state.score = 0
    },
    addScore: (state, actions) => {
      state.score += actions.payload
    },
    addHighScores: (state, actions) => {
      state.highScores.push(actions.payload)
    }
  }
})

export const { addScore, addHighScores } = score.actions
export const scoreReducer = score.reducer