import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../../components/common/Button";
import './style.css';

const Header = () => {
    let [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        (window.scrollY > 60) ? setNavBar(true) : setNavBar(false);
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <div className={navBar ? 'navbar active' : 'navbar'}>
            <div className="navbar__logo">
                <img
                    src="/assets/png/logo.png"
                    alt="Big Oh Logo"
                    className="navbar__logo__img"
                />
            </div>
            <div className="navbar__dropdown">
                <ul className="navbar__dropdown__list">

                    <NavLink to="/" ><li className="navbar__dropdown__list__item">Home</li></NavLink>
                    {/* <li className="navbar__dropdown__list__item">
                        Company
                        <ul className="drop_list">
                            <li className="drop_list__item">About Us</li>
                            <li className="drop_list__item">Life at Big Oh!</li>
                            <li className="drop_list__item">Become a Partner</li>
                        </ul>
                    </li> */}
                    <NavLink to='/company'><li className="navbar__dropdown__list__item">Company</li></NavLink>
                    <NavLink to="/phonepe" className='myOfferingActive'><li className="navbar__dropdown__list__item">Offerings</li></NavLink>
                    <NavLink to="/hotelPage" className='myActive'><li className="navbar__dropdown__list__item">Knowledge Centre</li></NavLink>
                    <NavLink to="/simplePage" className='myActive'><li className="navbar__dropdown__list__item">Case Studies</li></NavLink>
                </ul>
            </div>

            <NavLink to='/getStarted'><Button value="Get Started" /></NavLink>
        </div>
    )
}

export default Header;