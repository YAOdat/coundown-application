import './Nav.css';
import {useState} from 'react';


function NavBar() {
    const [toggleButton, setToggleButton] = useState(false);

    const toggle = () => {
        setToggleButton(!toggleButton);
    }

    return (
        <section className="black">
        <nav className="navbar"> 
            <div className="brand-title">JS Bootcamp</div>
            <a href="#" className="toggle-button" onClick={toggle}>
                {/* if the toggle button is clicked, show the list */}
                { toggleButton ? <i className="list"></i> : <i className="list"></i> }
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul> 
                    <li><a href="https://alqudscollege-my.sharepoint.com/:x:/g/personal/advtech_ltuc_com/EeXd_UKqD1RKmA7Yk56rYmQBZ01AaKzQbbwpXzlgMYgJ8g?e=h9gZWn" target='_blank'>Schedule</a></li>
                    <li><a href="https://odat-countdown.netlify.app/">Home</a></li>
                    <li><a href="#">Custom</a></li>
    
                </ul>
            </div>
        </nav>
      <div className="curve"></div>
    </section>
    )


}

export default NavBar;
