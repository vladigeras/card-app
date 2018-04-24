import React from 'react';
import {Link} from "react-router-dom";

export class MenuComponent extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo menu-logo">JetBrains's some tools</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/cards">Cards</Link></li>
                        <li><Link to="/table">Table</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
