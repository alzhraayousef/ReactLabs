
const INITIAL_VALUE = {
    counter: 0,
    flag:true,
    movie:{},
    FavoriteMovies:[]
}

export default function FavoriteReducer(state = INITIAL_VALUE, action){

    switch(action.type){
        case "CHANGE_FAVORITE": 
        if(action.payload.flag) // increase
        {
            const found =  state.FavoriteMovies.some(el => el.id == action.payload.movie.id);
            if (!found) 
            {
                state.FavoriteMovies.push(action.payload.movie);
                state.counter++;

            }
            else
            {
                alert("Movie already exist");
            }
        }
        else
        {
            if(state.counter>0)
            {
                state.counter--;
                const index = state.FavoriteMovies.findIndex(Element => {
                    return Element.id === action.payload.movie.id;
                  });
                  console.log(state.FavoriteMovies)
                state.FavoriteMovies.splice(index,1);
                console.log(state.FavoriteMovies)
            }
            state.flag=action.payload.flag;
        }
        return{
            ...state,
        }

        default: 
            return state
    }
}