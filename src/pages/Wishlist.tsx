import { MovieCard } from "../components/Moviecard";
import { movie } from "../mocks/Movie";
import * as Styles from "../styles/pages/Wishlist"

export function Wishlist() {
    return (
        <Styles.Container>
            <h1>Minha Lista</h1>

            <div className="cards">
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                />
            </div>
        </Styles.Container>
    )
}