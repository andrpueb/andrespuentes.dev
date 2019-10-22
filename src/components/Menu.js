import React from 'react';
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 0
        };
        this.change_border = this.change_border.bind(this);
    }
    change_border(e) {
        this.setState(prevState => ({ selection: prevState.selection + 1 }))
        console.log(this.state.selection)
        // e.target.setAttribute('class', 'redBorder');
    }

    render() {
        return (
            <div className="menu" >
                <div className="menu-inner">
                    <NavLink
                        to="/about"
                        activeClassName="is-active"
                    >
                        Andres
                    </NavLink>
                    <NavLink
                        to="/skills-and-tools"
                        activeClassName="is-active">
                        Skills and Tools
                    </NavLink>
                    <NavLink
                        to="/projects-and-work"
                        activeClassName="is-active"
                        onClick={this.change_border}>
                        Projects and work
                    </NavLink>
                    <NavLink
                        to="/contact-me"
                        activeClassName="is-active"
                        onClick={this.change_border}>
                        Contact Me
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Menu;
