import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import Resume from './components/Resume';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Resume} path='/resume' />
        <Route component={Post} path='/post' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
