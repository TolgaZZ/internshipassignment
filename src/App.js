import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import DescriptionTask from './components/tasks/DescriptionTask'
import SignIn from './components/auth/SignIn'
import Signup from './components/auth/SignUp'
import CreateTask from './components/tasks/CreateTask'
import { createStore } from 'redux'

const store = createStore();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={DescriptionTask} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={Signup} />
            <Route path='/create' component={CreateTask} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
