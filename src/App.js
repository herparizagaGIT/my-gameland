import React  from 'react';
import './index.scss';
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Contacto from './Contacto.js'
import Precios from './Precios.js'
import Game from './Game.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

const App = () => (
    <div id="PRINCIPAL">
        <Header/>
        <Router>
            <div id="ROUTE_CONTAINER">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="selected">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" activeClassName="selected">CONTACTO</NavLink>
                        </li>
                        <li>
                            <NavLink to="/precios" activeClassName="selected">PRECIOS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/juego" activeClassName="selected">JUEGOS</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/contacto">
                        <Contacto />
                    </Route>
                    <Route path="/precios">
                        <Precios />
                    </Route>
                    <Route path="/juego">
                        <Game />
                    </Route>
                </Switch>
            </div>
        </Router>
        <Footer/>
    </div>
)

export default App;