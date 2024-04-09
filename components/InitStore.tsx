'use client'

import React, { useEffect } from 'react'
import { initArticles } from '@/lib/articleSlice'
import { useDispatch } from 'react-redux'
import { Article } from '@/lib/articleSlice'

export default function InitStore({ articles }: { articles: Article[] }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initArticles(articles))
  }, [articles, dispatch])

  return (
    <></>
  )
}
