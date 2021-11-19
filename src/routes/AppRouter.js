import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";
import Creation from "../components/Creation";
import NavBar from "../components/shared/NavBar";
import Login from "../Login/Login";
import {ProviderLogin} from "../context/LoginContext";
import Delete from "../components/Delete";
import Edit from "../components/Edit";

function AppRouter() {
    return (
        <ProviderLogin>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/posts/:id"} component={Details}/>
                    <Route exact path={"/new-post"} component={Creation}/>
                    <Route exact path={"/delete/:id"} component={Delete}/>
                    <Route exact path={"/post/:id"} component={Edit}/>
                    <Route path={'/login'} exact component={Login}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </BrowserRouter>


        </ProviderLogin>
    );
}

export default AppRouter;
