import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ArticleState {
  articles: Article[]
}

export type Article = {
  id: number
  title: string
  created_at: string
  body: string
  html_url: string
  state: string
}

const initialState: ArticleState = {
  articles: [],
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    initArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload
    },
  },
})

export const { initArticles } = articleSlice.actions

export default articleSlice.reducer
