import React from 'react';
import {Route, Switch} from 'react-router-dom';


import {NavBar} from './components';
import {Home, Survepesu, Siselahendused, Work, People, FAQ, Contact} from './Pages';




function App() {

  return (
        <>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/survepesu" component={Survepesu} />
            <Route path='/siselahendused' component={Siselahendused} />
            <Route path='/tood' component={Work} />
            <Route path='/inimesed' component={People} />
            <Route path='/kkk' component={FAQ} />
            <Route path='/kontakt' component={Contact} />
          </Switch>
        </>
      );
    }

export default App
