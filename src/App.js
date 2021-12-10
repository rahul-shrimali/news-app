import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  

  const [mode, setMode] = useState("light")
  const [progress, setProgress] = useState(0)
  const [api, setapi] = useState(process.env.REACT_APP_NEWS_API_KEY)

  // api = process.env.REACT_APP_NEWS_API_KEY
  const setProgres = (progress)=>{
    setProgress(progress);
  }

  const toggleMode = () => {
    if (mode === "light") {
   
      setMode("dark");
      document.body.style.backgroundColor = "#464343";
    } else {
     
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  };

    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
          <NavBar mode={mode} toggleMode={toggleMode} />

          <Switch>
            <Route exact path="/">
              <News
                api = {api}
                setProgress = {setProgres}
                key="general"
                mode={mode}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                api = {api}
                setProgress = {setProgres}
                key="business"
                mode={mode}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                api = {api}
                setProgress = {setProgres}
                key="entertainment"
                mode={mode}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                api = {api}
                setProgress = {setProgres}
                key="health"
                mode={mode}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                api = {api}
                setProgress = {setProgres}
                key="science"
                mode={mode}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                api = {api}
                setProgress = {setProgres}
                key="sports"
                mode={mode}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                api = {api}
                setProgress = {setProgres}
                key="technology"
                mode={mode}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}

export default App;