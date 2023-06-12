import LoginForm from "./Pages/LoginForm";
import RegisterForm from "./Pages/RegisterForm";
import NavBar from "./Components/NavBar";
import Movies from "./Pages/Movies";
import Movie from "./Pages/Movie";
import Resume from "./Pages/Resume"
import NotFound from "./Pages/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from "./Pages/Favorites";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
            <NavBar />

            <Switch> 
            <Route   path={"/"} exact component={LoginForm} />
              <Route   path={"/Login"} exact component={LoginForm} />
              <Route   path={"/Register"} exact component={RegisterForm}   /> 
              <Route   path={"/movies"} exact component={Movies}   /> 
              <Route   path={"/movie/:id"} exact component={Movie}   /> 
              <Route   path={"/favorite"} exact component={Favorites}   /> 
              <Route   path={"/resume"} exact component={Resume}   /> 
              <Route   path={"*"} exact component={NotFound}   /> 
            </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;
