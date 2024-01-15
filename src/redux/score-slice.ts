import { createSlice } from "@reduxjs/toolkit";

type Player = {
  name: string,
  score: number,
}

const initialState = {
  score: 0,
  highScores: [
    { name: '', score: 0},
    { name: 'Agdf', score: 0},
    { name: 'HTtv', score: 210},
    { name: 'garg', score: 50},
    { name: 'serg', score: 460},
    { name: 'rgrgr', score: 30}
  ].sort((a, b) => b.score - a.score) as Player[]
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
      state.highScores.sort((a, b) => b.score - a.score)
    }
  }
})

export const { addScore, addHighScores } = score.actions
export const scoreReducer = score.reducer