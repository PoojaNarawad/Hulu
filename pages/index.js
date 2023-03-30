import Head from 'next/head';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Results from '../Components/Results';
import requests from '../utils/requests';



export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>HULU 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav/>
      <Results results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;


  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
    ).then((res) => res.json());
    const serializedData = JSON.stringify(request)
    return{
      props: {
        results: request.results,
      },
    };
}
