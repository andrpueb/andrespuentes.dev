import React from 'react';
import Header from './Header';



export default class Andrespuentes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section id="intro">
                    <div class="jumbotron">
                        <h1 class="display-4">Hello, world!</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4"></hr>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>
                </section>
                <section id="skills">
                </section>
                <section id="projects">
                </section>
            </div>
        )

    }

}