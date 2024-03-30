import ShowContext from "./ShowContext";
import { useReducer } from "react";
import ShowReducer from "./ShowReducer";


import {GET_SHOWS, SEARCH_SHOWS} from '../types/index'
import { getShowService, getSearchService } from "../../service/Show.service";
const ShowState = ({ children }) => {

    const initialState = {
        shows: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(ShowReducer, initialState);

    const getShows = async () => {
        try {
            const result = await getShowService()
            dispatch({
                type: GET_SHOWS,
                payload: result.data,
              })

        } catch (error) {
            console.log(error)
        }

    }

    const searchProducts = async (value) => {
        try {
          const result = await getSearchService({ name: value })
          dispatch({
            type: SEARCH_SHOWS,
            payload: result.data,
          })
        } catch (error) {
          console.log(error)
        }
      }
    
    return (
        <ShowContext.Provider
            value={{
                shows: state.shows,
                getShows,
                searchProducts,
                loading: state.loading
            }} >
            {children}
        </ShowContext.Provider>
    )
}

export default ShowState;