import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import MainContent from '../components/MainContent';
import About from './../components/About';
import Projects from './../components/Projects';
import Menu from './../components/Menu';
import Skills from './../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
        <div className="main_container">
            <Header />
            <Menu />
            <Switch>
                <Route path="/about" component={About} exact />
                <Route path="/projects-and-work" component={Projects} />
                <Route path="/skills-and-tools" component={Skills} />
                <Route path="/contact-me" component={Contact} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;
