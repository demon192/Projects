import './style.css';
import Card from '../../components/feature/Card';

function Footer() {
    return (
        <div className="main">
            <div className="main__top">
                <div className="main__top__card1">
                    <img
                        src='/assets/png/botshot_logo.png'
                        alt="botshot logo"
                        className="main__top__card1__logo"
                    /><br />
                    <div className="main__top__card1__social_icons">
                        <a href="#"
                        ><img
                                src="/assets/png/linkedin.png"
                                alt="linkedin"
                                className="main__top__card1__social_icons"
                            /></a>
                        <a href="#"
                        ><img
                                src="/assets/png/facebook.png"
                                alt="facebook"
                                className="main__top__card1__social_icons"
                            /></a>
                        <a href="#"
                        ><img
                                src="/assets/png/instagram.png"
                                alt="instagram"
                                className="main__top__card1__social_icons"
                            /></a>
                    </div>
                </div>
                <Card />
            </div>
            <div className="main__bottom">
                <div className="main__bottom__left">
                    <p>Privacy Policy | Terms of Uses | Sitemap</p>
                </div>
                <div className="main__bottom__right">
                    <p>&#169; Copyright 2022 Botshot</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;