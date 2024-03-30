import Shows from "../app/shows/views/Shows";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
    <Routes>
            <Route exact path="/" element={<Shows />} />
        
    </Routes>
    )
}
 
export default AppRouter