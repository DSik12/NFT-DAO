import "./App.css";
import Home from "./components/pages/Home";
import Createpage from './components/pages/Createpage';
import Treasurypage from './components/pages/Treasurypage';
import Aboutpage from './components/pages/Aboutpage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nftpage from './components/pages/Nftpage';
import NoPageFound from './components/pages/NoPageFound';
import Delegatepage from "./components/pages/Delegatepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Create" element={<Createpage />} />
          <Route path="/Treasury" component={Treasurypage} />
          <Route path="/About" element={<Aboutpage />} />
          {/* <Route path="/views/:id" element={<Detailspage />} /> */}
          <Route path="/Nft" component={Nftpage} />
          <Route path="/Delegate" element={<Delegatepage />} />
          <Route path="*" element={<NoPageFound />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
