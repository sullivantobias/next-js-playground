import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title"> Learn <a href="https://nextjs.org">Next.js!</a></h1>
          <Link href="/posts/first-post"><a>First Page</a></Link>
      </main>

    </div>
  )
}
