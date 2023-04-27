import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home"

import "./Styles/Home.scss"
import "./Styles/App.scss"
import "./Styles/Header.scss"
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;