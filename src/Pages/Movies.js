import { useEffect, useState } from "react"
import axios from "axios";
import Card from "../Components/Card";

function Movies(props){


    const [movies, setMovies] = useState([]);

    useEffect(() => {
       axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0")
        .then((res) => 
        {console.log(res.data.results);
           setMovies(res.data.results); 
         }) 
        .catch((err) =>  console.log(err))
    },[])

    return(
        //title , overview  , release_date , poster_path
        <>
            <div className="container px-5 mt-5"> 
            <div className="row">
            {movies.map((movie, index) => {
                return(
                    <div key={index} className="col-4 mb-2" > 
                        <Card Movie={movie}  flag={true}/>
                    </div>
                )
            })}
        </div>
        </div>
        </>
    )
}

export default Movies