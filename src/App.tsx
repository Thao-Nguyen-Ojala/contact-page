import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/users' component={HomePage} />
        <Redirect exact from='/' to='/users'></Redirect>
      </Switch>
    </div>
  );
}
export default App;
