export const metadata = {
  title: 'Home'
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovives() {
  // temp add to see Loading
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return fetch(URL).then(response => response.json())
}

export default async function Page() {
  const movies = await getMovives();
  return <div>
    <div>{JSON.stringify(movies)}</div>
  </div>
}
