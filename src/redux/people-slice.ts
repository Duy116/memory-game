import { createSlice } from "@reduxjs/toolkit";

export type PersonType = {
  img: string,
  name: string,
}

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
] as PersonType[]

const initialState = {
  people: peopleData
}

export const people = createSlice({
  name: 'people',
  initialState,
  reducers: {
    shufflePeople: (state) => {
      state.people.sort(() => 0.5 - Math.random());
    }
  }
})

export const { shufflePeople } = people.actions;
export const peopleReducer = people.reducer;