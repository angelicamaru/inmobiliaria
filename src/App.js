import InicioSection from "./Components/Inicio";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuMain from "./Components/Menu";

const App = () => {
  return (
    <Router>
      <div>
        <MenuMain />
        <Switch>
          <Route exact path="/">
            <InicioSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
