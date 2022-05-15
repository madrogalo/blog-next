import { configureStore } from '@reduxjs/toolkit'
import showMenuReducer from './reducers/showMenu/showMenuSlice'
import newsReducer from './reducers/news/newsSlice'
import oneNewsReducer from './reducers/oneNews/oneNewsSlice'

export const store = configureStore({
  reducer: {
    isShowMenu: showMenuReducer,
    news: newsReducer,
    oneNews: oneNewsReducer
  },
})