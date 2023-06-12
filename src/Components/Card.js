import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import { changeFavorite } from "../Store/Actions/Favorite";
import {useHistory} from "react-router-dom"

    function Card(props){ //{image, title, date, id }

        const history = useHistory(); 

        const dispatch = useDispatch() 
        const AddToFavorite = (Movie) => {
            dispatch(changeFavorite({movie:Movie,flag:true}))
        }

    const RemoveFromFavorite = (Movie) => {
        dispatch(changeFavorite({movie:Movie,flag:false}));
       history.push('/favorite');
    }


    return(
            <div className="col-4 mb-2">
                <div className="card" style={{width: "20rem", height:"30rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${props.Movie.poster_path}`} className="card-img-top" style={{height:"20rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.Movie.title}</h5>
                    <p className="card-text">{props.Movie.release_date}</p>
                    <Link to={`/movie/${props.Movie.id}`} className="btn" style={{backgroundColor:"pink"}}> More Details </Link>
                 &nbsp;
                  { props.flag? <button onClick={()=> AddToFavorite(props.Movie)} className="btn" style={{backgroundColor:"pink"}}>Add To Favorite</button>
                  :<button onClick={()=> RemoveFromFavorite(props.Movie)}  className="btn" style={{backgroundColor:"pink"}}>Remove From Fav</button> }
                   
                </div>
                </div>
            </div>
    
    )
}

export default Card