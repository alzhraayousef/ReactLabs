import {Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";
import Card from "../Components/Card";

    function Favorites(){
       
        const FavoriteMovies = useSelector((state) => state.FavoriteMovies)//console.log(state)
    return(
    <>
     <div className="container px-5 mt-5"> 
            <div className="row">
            {FavoriteMovies.map((movie, index) => {
                return(
                    <div key={index} className="col-4 mb-2" > 
                        <Card Movie={movie}  flag={false}/>
                    </div>
                )
            })}
        </div>
        </div>
    </>
    )
}

export default Favorites