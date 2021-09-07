import React, { createContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
// import "@styles/variables.scss";
// import "@styles/globals.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-scroll-up';
import Home from "./Components/Home/Home";
import Stats from "./Components/Stats/Stats";
import NotFound from "./Components/NotFound/NotFound";
import request from "./utilities/request";

function App() {
  const [memes, setMemes] = useState<any[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const loadData = async() => {
      const result = await request('/get-all-memes');
      console.log({result});
      setMemes(result);
      setActive(true);
  }

  useEffect(()=> {loadData();}, [""]);
  return (
    <div className="bg-light p-3">
      <Router>
          <Switch>
            <Route exact path="/">
              {
                active && <Home setMemes={setMemes} memes={memes} loadData={loadData}/>
              }
              
            </Route>
            <Route path="/home">
              <Home setMemes={setMemes} memes={memes} loadData={loadData}/>
            </Route>
            
            <Route path='/stats'>
              {
                active && <Stats memes={memes} />
              }
            </Route>
            <Route path='*/:page'>
              <NotFound/>
            </Route> 
          </Switch>
        </Router>
        {
          active && <footer><p className="text-center my-3">Ⓒ Md. Mehedi Hasan Khan {new Date().getFullYear()}</p> </footer>
        }
        <ScrollToTop easing={"linear"} duration={1} showUnder={160}>
          <p className='btn btn-info text-danger font-weight-bold rounded-circle'>UP</p>
        </ScrollToTop>
    </div>
  );
}

export default App;
