
import './App.css';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import ProjectUpdates from './components/ProjectUpdates';
import DocumentStorage from './components/DocumentStorage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductionDocs from './components/ProductionDocs';
import CompanyDocs from './components/CompanyDocs';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/project" element={<ProjectUpdates />} />
          <Route path="/projects/productiondocs" element={<ProductionDocs />} />
          <Route path="/projects/companydocs" element={<CompanyDocs />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
