import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import HeaderComponent from './components/layout/Header';
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
    <Router>         
      <HeaderComponent/>
      <div className="container">
      <Switch>
        <Route exact path="/" component={AddUser} />
        <Route exact path="/userList" component={UserList} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

