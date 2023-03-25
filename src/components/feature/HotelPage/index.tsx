import './style.css'

const HotelPage = () => {
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
                        <input type="email" name="email" className="hotel_page_left__form__email" />
                        <br /><br /><br /><br />
                        <p>Password</p>
                        <input type="password" name="password" className="hotel_page_left__form__password" />
                        <span className="material-symbols-outlined password_eye">visibility_off </span>
                        <br /><br /><br />
                        <a href="#" className="hotel_page_left__form__link">Forgot Password?</a>
                        <br /><br /><br />

                        <input type="submit" value="Login" className="hotel_page_left__form__submit" />
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