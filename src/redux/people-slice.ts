import { createSlice } from "@reduxjs/toolkit";

export type PersonType = {
  img: string,
  name: string,
}

const peopleData = [
  {
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Jack',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Jane',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Joe',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Jacob',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'Joseb',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Josephine',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Jade',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Jaden',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Julia',
  },
  //////
  {
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Juniper',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: 'Josie',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/6.jpg',
    name: 'James',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Jackson',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/8.jpg',
    name: 'Lee',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Dorthy',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/9.jpg',
    name: 'Rebeccah',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Walt',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Daniel',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Danielle',
  },
  //////
  {
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Charlie',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Karol',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Carol',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/13.jpg',
    name: 'Ellie',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Ryan',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/13.jpg',
    name: 'Malone',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    name: 'Mariah',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: 'Kermit',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/15.jpg',
    name: 'Raphael',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/15.jpg',
    name: 'Madelina',
  },  
].sort(() => 0.5 - Math.random()) as PersonType[]

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