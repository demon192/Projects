import './style.css';
import HeaderButton from "../../components/common/Button";

function Header() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img
                    src="/assets/png/logo.png"
                    alt="Big Oh Logo"
                    className="navbar__logo__img"
                />
            </div>
            <div className="navbar__dropdown">
                <ul className="navbar__dropdown__list">
                    <li className="navbar__dropdown__list__item">Home</li>
                    <li className="navbar__dropdown__list__item">
                        Company
                        <ul className="drop_list">
                            <li className="drop_list__item">About Us</li>
                            <li className="drop_list__item">Life at Big Oh!</li>
                            <li className="drop_list__item">Become a Partner</li>
                        </ul>
                    </li>
                    <li className="navbar__dropdown__list__item">Offerings</li>
                    <li className="navbar__dropdown__list__item">Knowledge Centre</li>
                    <li className="navbar__dropdown__list__item">Case Studies</li>
                </ul>
            </div>
            <HeaderButton />
        </div>
    )
}

export default Header;