import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from './components/Header';
import Homepage from './pages/Homepage';

export default function App() {

    return (
       <Router>
         <GlobalStyles/>
         <Header/>
         <Switch>
            <Route path="/" exact component = {Homepage}/>
         </Switch>
       </Router>
    )
};