'use client'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Image from 'next/legacy/image'
import { Article } from '@/lib/articleSlice'

export default function ListItem({ article }: { article: Article}) {
  const router = useRouter()
  const createTime = (new Date(article.created_at).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })).replaceAll(',', '' )
  const coverImage = extractImageFromMarkdown(article.body)

  function toArticle() {
    router.push(`/article?id=${article.id}`)
  }

  function extractImageFromMarkdown(markdownText: string) {
    const regex = /!\[.*?\]\((.*?)\)/
    const match = markdownText.match(regex)
    if (match && match[1]) {
      return match[1]
    } else {
      return '' // 如果没有匹配到图片链接，则返回 null
    }
  }

  return (
    <li className='mb-8 flex justify-between items-center cursor-pointer'>
      <div className='flex-1 mr-32 max-lg:mr-4'>
        <h1 className='font-bold mb-3 text-3xl max-lg:text-lg max-lg:mb-1 cursor-pointer' onClick={toArticle}>{article.title}</h1>
        <span className='text-gray-500 max-lg:text-sm cursor-pointer'>{createTime}</span>
      </div>

      <div className='w-[400px] h-[200px] relative max-lg:w-[100px] max-lg:h-[75px] cursor-pointer'>
        {/* <Image src='' alt='' layout='fill' objectFit='cover' /> */}
      </div>
    </li>
  )
}
