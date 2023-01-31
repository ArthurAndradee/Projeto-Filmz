import { HTMLAttributes } from "react"

export interface IMovieCardProps extends HTMLAttributes<HTMLDivElement> {
  movie: any
  inWishlist: boolean
  handleAddMovieOnWishlist: (movie: any) => void
}
