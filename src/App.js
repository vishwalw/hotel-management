import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./routes/home";
import hotel from "./routes/hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
