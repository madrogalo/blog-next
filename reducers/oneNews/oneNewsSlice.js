import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  news: [],
}

export const counterSlice = createSlice({
  name: 'oneNews',
  initialState,
  reducers: {
    setOneNews: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.news = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOneNews } = counterSlice.actions

export default counterSlice.reducer