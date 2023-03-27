import { ChangeEvent, useState } from 'react';
import './style.css'

const HotelPage = () => {
    const [login, setLogin] = useState({
        email: "", password: ""
    });

    const [loginStatus, setLoginStatus] = useState(false);

    let name, value;

    const handleLoginForm = (e: ChangeEvent<HTMLInputElement>) => {

        name = e.target.name;
        value = e.target.value;
        setLogin({ ...login, [name]: value });
    }

    const saveLoginDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (login.email.length > 0 && login.password.length > 0) {
            setLoginStatus(!loginStatus);
            console.log(login);
        }
    }

    return (
        <div className="hotel_page">
            <div className="hotel_page_left">
                <div className="hotel_page_left__icon1">
                    <img src="./assets/svg/hotel.svg" alt="" />
                </div>
                <div className="hotel_page_left__form">
                    <h1 className="hotel_page_left__form__heading">Login</h1><br />
                    <p className="hotel_page_left__form__para">Welcome to BOTSHOT Admin Panel <span><img src="./assets/svg/hotel.svg" alt="" /></span></p>
                    <br /><br />
                    <form action="">
                        <p>Email Address</p>
                        <input name="email" value={login.email} onChange={handleLoginForm} type="email" className="hotel_page_left__form__email" />
                        <br /><br /><br /><br />
                        <p>Password</p>
                        <input name="password" value={login.password} onChange={handleLoginForm} type="password" className="hotel_page_left__form__password" />
                        <span className="material-symbols-outlined password_eye">visibility_off </span>
                        <br /><br /><br />
                        <a href="#" className="hotel_page_left__form__link">Forgot Password?</a>
                        <br /><br /><br />
                        <button className="hotel_page_left__form__submit" onClick={saveLoginDetails}>Login</button>
                    </form>
                </div>
                <div className="hotel_page_left__icon2">
                    <img src="./assets/svg/hotel.svg" alt="" />
                </div>
                <div className="hotel_page_left__agreement">
                    <p>I hereby agree to <a href="#" className="hotel_page_left__agreement__term_and_condition">Terms and Conditions</a></p>
                </div>
            </div>
            <div className="hotel_page_right">
                <div className="hotel_page_right__topbar">
                    <ul className="hotel_page_right__topbar__nav_list">
                        <li ><a href="#" className="hotel_page_right__topbar__nav_list__list">About Us</a></li>
                        <li ><a href="#" className="hotel_page_right__topbar__nav_list__list">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="hotel_page_right__content">
                    <p>Managing Hotel is Now Easy</p>
                    <div className="hotel_page_right__content__list">
                        <ul className="hotel_page_right__content__list__column">
                            <li><span className="material-symbols-outlined hotel_page_right__content__list__column__icons">dashboard</span>Live Dashboard</li>
                            <li><span className="material-symbols-outlined hotel_page_right__content__list__column__icons">equalizer</span>Analytics</li>
                            <li><span className="material-symbols-outlined hotel_page_right__content__list__column__icons">search</span>Universal Search</li>
                        </ul>
                        <ul className="hotel_page_right__content__list__column">
                            <li><span className="material-symbols-outlined hotel_page_right__content__list__column__icons">tune</span>Filters as per Journeys</li>
                            <li><span className="material-symbols-outlined hotel_page_right__content__list__column__icons">live_help</span>Live Request Handling</li>
                        </ul>

                    </div>
                </div>
                <div className="hotel_page_right__bottom">
                    <img src="./assets/png/bot-logo.png" alt="Bot logo" />
                    <p>&#169; 2022, Botshot. All Right Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default HotelPage;