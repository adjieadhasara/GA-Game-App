import { Route, Switch } from "react-router-dom";
import Home from "../Page/Home/Home";
import GameList from "../Page/Home/GameList";
import GameDetails from "../Page/Home/GameDetails";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/games-list" component={GameList} />
      <Route path="/game-details/:id" component={GameDetails} />
    </Switch>
  );
}
export default Routes;
