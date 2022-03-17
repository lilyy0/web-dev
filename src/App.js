import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter/index";

import './App.css';
import HelloWorld from "./components/hello-world";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello"
            exact={true}
            element={<HelloWorld />} />
          <Route path="/"
            exact={true}
            element={<Labs />} />
          <Route path="/tuiter"
            exact={true}
            element={<Tuiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
