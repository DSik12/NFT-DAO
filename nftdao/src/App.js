import "./App.css";
import Home from "./components/pages/Home";
import Createpage from './components/pages/Createpage';
import Treasurypage from './components/pages/Treasurypage';
import Aboutpage from './components/pages/Aboutpage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nftpage from './components/pages/Nftpage';
import NoPageFound from './components/pages/NoPageFound';
import Delegatepage from "./components/pages/Delegatepage";
import Proposal from "./components/pages/Proposal";
import Registration from './components/pages/Registration';
import Login from "./components/pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route exact path="/" component={Registration} />
          <Route path="/Proposal" component={Proposal} />
          <Route path="/Create" component={Createpage} />
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
