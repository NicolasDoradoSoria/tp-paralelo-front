import { useContext } from 'react'
import ShowContext from '../showContext/ShowContext'

const UseShowContext = () => {
    const showContext = useContext(ShowContext);
    const { shows, getShows } = showContext
    return {
        shows,
        getShows
    }
}
 
export default UseShowContext;