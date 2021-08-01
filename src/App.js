import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Send from './pages/Send';
import Tests from './pages/Tests';
import TeacherTests from './pages/TeacherTests';

export default function App() {

    return (
       <Router>
         <GlobalStyles/>
         <Header/>
         <Switch>
            <Route path="/" exact component = {Homepage}/>
            <Route path="/enviar" exact component = {Send}/>
            <Route path="/disciplines/:id" exact component = {Tests}/>
            <Route path ="/teachers/:teacherId/:id" exact component = {TeacherTests}/>
         </Switch>
       </Router>
    )
};