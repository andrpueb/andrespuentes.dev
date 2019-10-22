import React from 'react';
class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activated: 'inactive'
        };
    }

    componentDidMount() {
        this.giveMeClass();
    }

    componentWillUnmount() {
        console.log('about unloaded');
    }

    giveMeClass = () => {
        setTimeout(() => {
            this.setState({
                activated: 'activated'
            })
        }, 300);
    }

    render() {
        return (
            <section className="content" >
                <div className={`skills ${this.state.activated}`}>
                    <p>My name is Andres Puentes, I am based in London, UK and have been working in Web Development for the last 3 years. I first started learning by my own and doing some freelance projects and for the last 2 years I have been more involved in projects related to data analysis and A/B testing.</p>
                    <p></p>
                </div>
            </section>
        )
    }
}


export default Skills;
