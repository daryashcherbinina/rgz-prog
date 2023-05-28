import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../index.css';
import React from 'react';

export default function Header(props) {
    useEffect(() => {
        let sidenav = document.querySelector("#slide-out");
        M.Sidenav.init(sidenav, {});
       }, [])

    return (
        
        <header>
        <div class="navbar-fixed">
            <nav className="orange darken-2">
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">FoodLovers</Link>
                    <Link  data-target="slide-out" className ="sidenav-trigger"><i className = "material-icons">menu</i></Link>
                    <ul  className="right hide-on-med-and-down">
                        <li><Link to="/">Категории</Link></li>
                        <li><Link to="/ingredient">Ингредиенты</Link></li>
                    </ul>
                </div>
            </nav>
            </div>
            <ul id="slide-out" class="sidenav sidenav-close">
                        <li><Link  className = "waves-effect" to="/">Категории</Link></li>
                        <li><Link className = "waves-effect" to="/ingredient">Ингредиенты</Link></li>
                </ul>
        </header>
        

    );
}