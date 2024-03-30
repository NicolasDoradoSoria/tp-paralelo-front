import ShowItem from "../components/ShowItem";
import useShow from "../hook/useShow";
import Card from '@mui/material/Card';

const Shows = () => {
    const { shows} = useShow()

    return (

        <div className="shows-container">
            <h1>Shows disponibles</h1>
            <div className="shows">

                {
                    shows.map(show => (
                        <ShowItem show={show} key={show.id} />
                    )) 
                }
            </div>

        </div>
    );
}

export default Shows;