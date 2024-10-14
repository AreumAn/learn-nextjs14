import Link from 'next/link';

export const metadata = {
  title: 'Home'
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovives() {
  // temp add to see Loading
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return fetch(API_URL).then(response => response.json())
}

export default async function Page() {
  const movies = await getMovives();
  return <div>
    <div>{
      movies.map(movie => <li key={movie.id}><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)
      }</div>
  </div>
}
