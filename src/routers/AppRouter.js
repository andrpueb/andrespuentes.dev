import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import Home from './../components/Home';
import Projects from './../components/Projects';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/projects" component={Projects} exact />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;
