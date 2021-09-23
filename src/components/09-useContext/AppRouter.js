import React from 'react'
import {AboutScreen} from './AboutScreen'
import {LoginScreen} from './LoginScreen'
import {HomeScreen} from './HomeScreen'
import { NavBar } from './NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div className = "container">
                    <Switch>
                        <Route exact = {true} path = "/" component = {HomeScreen}/>
                        <Route exact = {true} path = "/about" component = {AboutScreen}/>
                        <Route exact = {true} path = "/login" component = {LoginScreen}/>
                        <Redirect to = "/"/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
