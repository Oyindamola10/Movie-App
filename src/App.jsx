import { useEffect,useState } from "react"
import MovieCard from "./components/MovieCard"
import "./App.css"


const App = () => {

  const[movies, setMovies] = useState([

    {
      
      title: "Big Love",
      description: "The Excellence and Flaws of Tradition told in a well known story of boy meets girl, boy falls in love with girl, then the other shoe drops: family drama.",
      posterUrl: "https://shorturl.at/ijpxA",
      rating:" 9"
    },
    {
      
      title: "SHE Must Be Obeyed",
      description: "The story of Victoria's insatiable ambition to rise in the entertainment industry following her training as a personal assistant to a high-powered executive.",
      posterUrl: "https://shorturl.at/oHIW6",
      rating:" 8"
    },
    {
      
      title: "Spider-Man (2002)",
      description: "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a ...",
      posterUrl: "https://shorturl.at/tQZ68",
      rating: "7.4"
    },
    {
      
      title: "The Flash (2023)",
      description: "The Flash: Directed by Andy Muschietti. With Ezra Miller, Michael Keaton, Sasha Calle, Michael Shannon. Barry Allen uses his super speed to change the past, ...",
      posterUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8971ab4e-777c-4897-b797-ddc3448e6bda/dcznsbt-f4798207-da27-4311-a009-77cdca91f565.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5NzFhYjRlLTc3N2MtNDg5Ny1iNzk3LWRkYzM0NDhlNmJkYVwvZGN6bnNidC1mNDc5ODIwNy1kYTI3LTQzMTEtYTAwOS03N2NkY2E5MWY1NjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SUDXdx0C-atCHUZ32l39ZQWbetiwHfmxwlpeoOHTsSU",
      rating: "8.5"
    },
    {
      
      title: "The Batman (2022)",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question ...",
      posterUrl: "https://m.media-amazon.com/images/I/91ezOOQjE3L.jpg",
      rating: "7.5"
    }
  ])
     
     const [searchText, setSearchText] = useState("")


     const filteredMovies = movies?.filter(
      (movie) => (
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      )
     );
      
  return (
    <>
     <div className="form">
        <form>
          <input type="text" placeholder="Search" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
           </form>
      </div>  
      <div className="first">
        {filteredMovies.map(({id,title,description,posterUrl,rating}) =>{
          return(
            <MovieCard 
            key={id}
            title={title}
            description={description}
            posterURL={posterUrl}
            rating={rating}
            ></MovieCard>
          )
        })}
      
      </div>
     
    </>
  )
}

export default App
