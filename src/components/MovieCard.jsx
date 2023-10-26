import "./MovieCard.css"

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="container">
      <img src={posterURL} alt= "" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating:{rating}</p>
    </div>
  )

  
}

export default MovieCard
