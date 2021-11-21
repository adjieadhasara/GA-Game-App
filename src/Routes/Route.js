import { Route, Switch } from "react-router-dom";
import Home from "../Page/Home/Home";
import GameList from "../Page/Home/GameList";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/games-list" component={GameList} />
    </Switch>
  );
}
export default Routes;
