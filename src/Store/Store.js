import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import FavoriteReducer from "./Redusers/FavoriteReducer";


const store = createStore(FavoriteReducer, composeWithDevTools() )


export default store