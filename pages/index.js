import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import axios from 'axios'

const ShowLink = ({ show }) => (
  <li>
    <Link as={`/p/${show.id}`} href={`/post?title=${show.id}`}>
      <a>{show.name}</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <ShowLink key={show.id} show={show} />
      ))}
    </ul>
    <style global jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await axios('https://api.tvmaze.com/search/shows?q=batman')
  const data = res.data

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
