import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import Link from 'next/link';

interface IParams {
  params: {id:string};
}

export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title
  }
}

export default async function MovieDetail({params: {id}}: IParams) {
  return (<div>
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    <Link href={`/movies/${id}/credits`}>Credits</Link>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
  )
}
