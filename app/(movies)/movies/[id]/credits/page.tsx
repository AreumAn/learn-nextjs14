import MovieCredits from '../../../../../components/movie-credits';
import { getMovie } from '../../../../../components/movie-info';

interface IParams {
  params: {id:string};
}

export async function generateMetadata({params: {id}}: IParams) {
  const movie = await getMovie(id);
  return {
    title: `${movie.title} - Credits`
  }
}

export default async function MovieCredit({params: {id}}: IParams) {
  return (<div>
    <MovieCredits id={id} />
  </div>)
}
