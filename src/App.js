import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./pages/home";
import Rasm from "./pages/Rasm";
import Video from "./pages/Video";
import Jarayon from "./pages/Jarayon";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/rasm" exact>
              <Rasm />
            </Route>
            <Route path="/video" exact>
              <Video />
            </Route>
            <Route path="/jarayon" exact>
              <Jarayon />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
