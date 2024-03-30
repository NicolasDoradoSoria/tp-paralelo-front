import './App.css'
import AppRouter from './router/AppRouter.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import ShowState from './context/showContext/ShowState.jsx'
function App() {

  return (
    <>
      <ShowState>
        <Router>
          <AppRouter />
        </Router>
      </ShowState>
    </>
  )
}

export default App
