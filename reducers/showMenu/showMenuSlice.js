import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShow: false,
}

export const counterSlice = createSlice({
  name: 'showMenu',
  initialState,
  reducers: {
    showHideMenu: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isShow = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { showHideMenu } = counterSlice.actions

export default counterSlice.reducer