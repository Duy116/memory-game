import { createSlice } from "@reduxjs/toolkit";

const peopleData = [
  {
    img: 'logo512.png',
    name: 'John',
  },
  {
    img: 'logo512.png',
    name: 'Jack',
  },
  {
    img: 'logo512.png',
    name: 'Jane',
  },
  {
    img: 'logo512.png',
    name: 'Joe',
  },
  {
    img: 'logo512.png',
    name: 'Jacob',
  },
  {
    img: 'logo512.png',
    name: 'Joseb',
  },
]

const initialState = {
  people: peopleData
}

export const people = createSlice({
  name: 'people',
  initialState,
  reducers: {

  }
})

export const peopleReducer = people.reducer;