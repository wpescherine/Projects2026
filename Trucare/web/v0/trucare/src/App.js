import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import useState from 'react'

import Main from "./main"
import PCreate from "./pcreate"
import DCreate from "./dcreate"
import Dashboard from "./dashboard"

function App() {
  const [username, setUsername] = useState("None")
  return (
    <Router>
      <div className="App">
        <Context.Provider value={{username, setUsername}}>
          <Routes>
            <Route exct path="/" element={ <Main />} />
            <Route exct path="/pcreate" element={ <PCreate />} />
            <Route exct path="/dcreate" element={ <DCreate />} />
            <Route exct path="/dashboard" element={ <Dashboard />} />
          </Routes>
        </Context.Provider>
      </div>
    </Router>
  );
}

export default App;
