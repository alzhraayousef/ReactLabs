import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
function Movie(){
    const mov = useParams() 
    console.log(mov.id)
    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${mov.id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err))
    }, [])
 

    return(
        <div className="container mt-5 mb-5 ">
            <div className="row">
                <div className="col-4"></div>
        <div className="card col-4" style={{width: "30rem", height:"40rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" style={{height:"20rem"}}/>
        <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.release_date}</p>
            <p className="card-text">{movie.overview}</p>
            <Link to={"/movies"} className="btn" style={{backgroundColor:"pink"}}> Back To List </Link>
        </div>
        <div className="col-4"></div>
        </div>
        </div>
    </div>
    )
}

export default Movie