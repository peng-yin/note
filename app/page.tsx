import ListItem from '../components/ListItem'
import InitStore from '../components/InitStore'

async function getData() {
  const res = await fetch('https://api.github.com/repos/peng-yin/note/issues?per_page=200', {
    headers: {
      authorization: `Bearer ${process.env.PERSONAL_GITHUB_ACCESS_TOKEN}`,
    }
  })

  return {
    status: res.status,
    articles: res.ok ? (await res.json()) : []
  }
}

export default async function Home() {
  const { status, articles } = await getData()
  
  return (
    <main className="w-full max-w-[1200px] mx-auto h-screen overflow-y-scroll overflow-x-hidden no-scrollbar p-16 max-lg:p-4">
      <h1 className='text-7xl max-lg:text-3xl font-bold mb-0'>peng-yin&apos;s</h1>
      <h1 className='text-7xl max-lg:text-3xl font-bold mb-6'>博客</h1>
      <section className='mb-6 '>
        <a href="https://github.com/peng-yin" target='__blank' className='icon bg-[url(/github.svg)]'></a>
      </section>
      <InitStore articles={articles} />
      <p>Status: {status}</p>
      <p>token: {process.env.PERSONAL_GITHUB_ACCESS_TOKEN?.substring(0, 8)}</p>

      <ul>
        {articles.map((item: any) => {
          return <ListItem key={item.id} article={item} />
        })}
      </ul>
    </main>
  )
}
