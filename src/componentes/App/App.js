import Menu from '../MenuInicio/Menu';
import React from 'react';
import Container from '../VW/Container'
import { Route, Switch } from 'react-router-dom';
import Brasilia from '../VW/Brasilia';
import Fusca from '../VW/Fusca';
import Kombi from '../VW/Kombi';
import Polo from '../VW/Polo';
import Gol from '../VW/Gol';
import Mecanica from '../../Mecanica/Mecanica';
function App() {
  return (
    <>
        <Menu />
        <main>
          <Switch>
            <Route exact path="/" render={() => <Container />}></Route>
            <Route exact path="/brasilia" render={() => <Brasilia />}></Route>
            <Route exact path="/fusca" render={() => <Fusca />}></Route>
            <Route exact path="/kombi" render={() => <Kombi />}></Route>
            <Route exact path="/polo" render={() => <Polo />}></Route>
            <Route exact path="/gol" render={() => <Gol />}></Route>
            <Route exact path="/mecanica" render={() => <Mecanica />}></Route>
          </Switch>
        </main>
    </>
  );
}



export default App;