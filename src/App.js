
import './App.css';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import ProjectUpdates from './components/ProjectUpdates';
import DocumentStorage from './components/DocumentStorage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductionDocs from './components/ProductionDocs';
import CompanyDocs from './components/CompanyDocs';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/news">
              <NewsFeed />
            </Route>
            <Route path="/project">
              <ProjectUpdates />
            </Route>
            <Route path="/projects/productiondocs">
              <ProductionDocs />
            </Route>
            <Route path="/projects/companydocs">
              <CompanyDocs />
            </Route>

          </Switch>
      </div>
    </Router>
    
  );
}

export default App;