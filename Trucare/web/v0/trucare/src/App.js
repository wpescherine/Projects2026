import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'

import Main from "./main"
import PCreate from "./pcreate"
import DCreate from "./dcreate"
import Dashboard from "./dashboard"
import MyContext from "./myContext"  

function App() {
  const [globalUsername, setGlobalUsername] = useState("");

  return (
    <MyContext.Provider value={{globalUsername, setGlobalUsername}}>
      <Router>
        <div className="App">
          <Routes>
            <Route exct path="/" element={ <Main />} />
            <Route exct path="/pcreate" element={ <PCreate />} />
            <Route exct path="/dcreate" element={ <DCreate />} />
            <Route exct path="/dashboard" element={ <Dashboard />} />
          </Routes>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
