import {useState} from 'react'

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Peoples from './components/peoples/Peoples';
import Contract from './components/contract/Contract';
import Estatic from './components/charts/Estatistica';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  return (
    <div className="container">
      <Router>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/peoples' exact component={Peoples}/>
          <Route path='/contract' exact component={Contract}/>
          <Route path='/estatistica' exact component={Estatic}/>
        </Switch>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        </Router>
    </div>
  );
}

export default App;
