import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './articleSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      article: articleReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
