import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Hotel from "./Components/Hotel";
import Destination from "./Components/Destination";
import Createhotel from "./Components/Createhotel";
import {
  HOTEL,
  HOTELDETAIL,
  CREATEHOTEL,
  DESTINATION,
  HOME,
  HOTELEDIT,
} from "./routes";
import Hoteldetails from "./Components/Hoteldetails";
import Hoteledit from "./Components/Hoteledit";
function Dummy() {
  return <p>Dummy</p>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={HOME} component={Home} exact />
          <Route path={HOTEL} component={Hotel} exact />
          <Route path={CREATEHOTEL} component={Createhotel} exact />
          <Route path={HOTELEDIT} component={Hoteledit} exact />
          <Route path={HOTELDETAIL} component={Hoteldetails} />
          <Route path={DESTINATION} component={Destination} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
