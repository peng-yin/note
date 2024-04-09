'use client'

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import type { Article } from '@/lib/articleSlice'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import ReactHtmlParser from 'react-html-parser'

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    }
  }),
)

const renderer = new marked.Renderer()
renderer.link = (href: string, title: string, text: string) => {
  return `<a href="${href}" target="_blank" title="" rel="noopener noreferrer">${text}</a>`
}

export default function Article({ searchParams }: { searchParams: { id: string } }) {
  const articleId = Number(searchParams.id)
  const articles: Article[] = useSelector((state: any) => state.article.articles)
  const [articleDetail] = articles.filter((article: Article) => article.id === articleId)
  const articleContent = marked.parse(articleDetail?.body || '') as string
  const originLink = marked.parse(`[原文链接: ${articleDetail?.html_url || ''}](${articleDetail?.html_url || ''})`, { renderer }) as string

  const router = useRouter()

  useEffect(() => {
    if (!articleDetail) {
      router.replace('/')
    }
  })

  return (
    articleDetail ?
    <div className='max-w-[960px] w-full mx-auto markdown no-scrollbar overflow-y-scroll p-16 max-lg:p-4'>
      <h1 className='font-bold mb-6'>{articleDetail.title}</h1>
      <div className='text-blue-700 underline'>{ReactHtmlParser(originLink)}</div>
      {ReactHtmlParser(articleContent)}
    </div>
    : null
  )
}
