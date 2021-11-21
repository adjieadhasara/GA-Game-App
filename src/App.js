import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Routes from "./Routes/Route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
