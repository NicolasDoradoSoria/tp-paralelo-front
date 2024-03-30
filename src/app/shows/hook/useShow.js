import { useEffect } from "react";
import UseShowContext from "../../../context/hook/UseShowContext";

const useShow = () => {
    const { shows, getShows, loading } = UseShowContext()

    useEffect(() => {
        getShows()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return {
        shows,
        loading
    }
}
 
export default useShow;