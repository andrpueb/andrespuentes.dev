import React from 'react';
import { NavLink } from 'react-router-dom'


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="footer" >
                <div className="footer-icons">
                    <a href="">GitHub</a>
                    <a href="">LinkedIn</a>
                    <a href="">Codepen</a>
                </div>
            </div>
        )
    };
}

export default Footer;
