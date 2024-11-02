
import { API_URL } from '../app/constants';
import styles from '../styles/movie-credits.module.css';

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`)
  return response.json();
}

export default async function MovieCredits({id}: {id: string}) {
  const credits = await getCredits(id)
  return (
    <div className={styles.wrapper}>
      <div className={styles.credits}>
        {credits.map((credit) => (
          <div key={credit.id} className={styles.creditItem}>
            <span className={styles.character}>{credit.character}</span>
            <span className={styles.name}>{credit.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
