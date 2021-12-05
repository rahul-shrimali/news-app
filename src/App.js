import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  state = {
    progress : 0
  }

  api = process.env.REACT_APP_NEWS_API_KEY
  setProgress = (progress)=>{
    this.setState({progress : progress});
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#464343";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    }
  };

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />

          <Switch>
            <Route exact path="/">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="general"
                mode={this.state.mode}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="business"
                mode={this.state.mode}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="entertainment"
                mode={this.state.mode}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="health"
                mode={this.state.mode}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="science"
                mode={this.state.mode}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="sports"
                mode={this.state.mode}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                api = {this.api}
                setProgress = {this.setProgress}
                key="technology"
                mode={this.state.mode}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
