import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: 'inactive',
            pic: 'inactive'
        };
        this.animateAbout = this.animateAbout.bind(this);
        this.animatePic = this.animatePic.bind(this);
    }

    componentDidMount() {
        this.animateAbout();
        this.animatePic();
    }

    componentWillUnmount() {

    }

    animateAbout = () => {
        setTimeout(() => {
            this.setState({
                activated: 'activated'
            })
        }, 300);
    }

    animatePic = () => {
        setTimeout(() => {
            this.setState({
                pic: 'activated'
            })
        }, 1500);
    }
    render() {
        return (
            <section className="content" >
                <div className="content_inner about">
                    <div className={`content_title ${this.state.activated}`}>
                        <h1>About me..</h1>
                    </div>
                    <div className={`content_text ${this.state.activated}`}>
                        <p>My name is Andres Puentes, I am based in London, UK and have been working in Web Development for the last 3 years. I first started learning by my own and doing some freelance projects and for the last 2 years I have been more involved in projects related to data analysis and A/B testing.</p>
                    </div>
                    <div className="content_image">
                    </div>
                </div>
            </section>
        )
    }
}

export default About;