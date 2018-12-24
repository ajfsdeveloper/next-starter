import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a style={{ fontSize: 20 }}>About Page</a>
      {/* <button>Go to About Page</button> */}
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
