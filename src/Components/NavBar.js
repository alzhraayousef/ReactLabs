import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

function NavBar() {

    const counter = useSelector((state) => state.counter)//console.log(state)

    return (

        <>
            <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "pink", color: "black" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                                <Link class="nav-link active" to="/resume">Resume</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Register">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Login">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/movies">Movies</Link>
                            </li>
                            <li className="nav-item text-danger">
                                <Link class="nav-link" to="/favorite">Favorites  &nbsp;
                                <span id="badge" className="text-danger">{counter}</span></Link>                                 
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;



/*
        // <nav aria-label="Page navigation example">
        //     <ul class="pagination">
        //         <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        //         <li class="page-item">  <Link class="page-link" to="/Login">Login</Link> </li>
        //         <li class="page-item">  <Link class="page-link" to="/Register">Register</Link> </li>
        //         <li class="page-item">  <Link class="page-link" to="/Login">Login</Link> </li>
        //         <li class="page-item">  <Link class="page-link" to="/Register">Register</Link> </li>
        //         <li class="page-item"><a class="page-link" href="#">Next</a></li>
        //     </ul>
        // </nav>
*/