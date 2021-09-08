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
import { Spin, Alert } from 'antd';
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
    <div className={`${active && "bg-dark"} text-light p-3`}>
      {
        !active && <div style={{position:'relative', top: '250px'}} className="w-75 mx-auto text-center justify-content-center">
            <Spin size="large" tip="Loading...">
          </Spin>
        </div>
      }
      <Router>
          <Switch>
            <Route exact path="/">
              {
                active && <Home setMemes={setMemes} memes={memes} loadData={loadData}/>
              }
            </Route>
            
            <Route path="/home">
              {
                active && <Home setMemes={setMemes} memes={memes} loadData={loadData}/>
              }
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
          active && <footer><p style={{paddingBottom: "2px"}} className="text-center my-3">Ⓒ Md. Mehedi Hasan Khan {new Date().getFullYear()}</p> </footer>
        }
        <ScrollToTop duration={3} showUnder={160}>
          <p className='btn btn-info text-danger font-weight-bold rounded-circle'>UP</p>
        </ScrollToTop>
    </div>
  );
}

export default App;
