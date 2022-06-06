import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./components/home";
import about from "./components/about";
import singlePost from "./components/singlePost";
import lang from "./components/lang"
import ProjectsT from "./components/projectsT";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={home} path='/' exact />
        <Route component={about} path='/about' />
        <Route component={singlePost} path='/post/:slug' />
        <Route component={ProjectsT} path='/projects' />
        <Route component={lang} path='/lang' />

      </Switch>
    </BrowserRouter>
  ) 
}

export default App;
