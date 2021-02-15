import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./components/home";
import about from "./components/about";
import singlePost from "./components/singlePost";
import post from "./components/post"
import project from "./components/project";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={home} path='/' exact />
        <Route component={about} path='/about' />
        <Route component={singlePost} path='/post/:slug' />
        <Route component={post} path='/post' />
        <Route component={project} path='/project' />

      </Switch>
    </BrowserRouter>
  ) 
}

export default App;
