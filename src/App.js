import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter/index";

import './App.css';
import HelloWorld from "./components/hello-world";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import HomeScreen from './components/tuiter/home-screen';

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
            element={<Tuiter />}>
            <Route path="explore"
              element={<ExploreScreen />} />
            <Route index element={<HomeScreen />} />
            {
            // <Route path="notifications"
            //   element={<NotificationScreen />} /> */
              }
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
