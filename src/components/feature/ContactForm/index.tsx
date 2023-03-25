import './style.css';
import Input from '../../common/Input';

const ContactForm = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__top">
                <div className="wrapper__top__left">
                    <h1 className="wrapper__top__left__heading">CONTACT US</h1>
                    <div className="wrapper__top__left__contact_details">
                        <span className="material-symbols-outlined icon"> domain </span>
                        <p >
                            Unit No.-A-1002, 10th Floor, Tower A, Plot No. 7, Advant Navis
                            Business Park, Sector - 142, Greater Noida Express Way, Noida
                            -201305
                        </p>
                    </div>
                    <div className="wrapper__top__left__contact_details">
                        <span className="material-symbols-outlined icon"> language </span>
                        <p>www.nldsl.in</p>
                    </div>
                    <div className="wrapper__top__left__contact_details">
                        <span className="material-symbols-outlined icon"> call </span>
                        <p>1800-572-8314</p>
                    </div>
                    <div className="wrapper__top__left__contact_details">
                        <span className="material-symbols-outlined icon"> mail </span>
                        <p>helpdesk@ldb.co.in</p>
                    </div>
                    <div className="wrapper__top__left__contact_details">
                        <span className="material-symbols-outlined icon"> schedule </span>
                        <p>9:00 to 17:00 Hours IST (Monday to Friday)</p>
                    </div>
                </div>
                <div className="wrapper__top__right">
                    <h1 className="wrapper__top__right__heading">CONTACT FORM</h1>
                    <form action="" className="wrapper__top__right__form">
                        <div className="left">
                            <div>
                                <label htmlFor="name" className="left__label">Your Name</label>
                                <Input placeholder="Minimum 4 Characters (only alphabets)" />
                            </div>
                            <div>
                                <label htmlFor="org_name" className="left__label"
                                >Organization Name</label>
                                <Input placeholder='Minimum 2 Characters (only alphanumeric)' />
                            </div>
                            <div>
                                <label htmlFor="message" className="left__label">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols={58}
                                    rows={3}
                                    minLength={15}
                                    placeholder="Minimum 15 characters (alphanumeric with special characters)"
                                    className="left__message"
                                ></textarea>
                            </div>
                            <button type="submit" className="left__send_msg">SEND MESSAGE</button>
                        </div>
                        <div className="right">
                            <div className='right__div'>
                                <label htmlFor="number" className="right__label">Your Number</label><br />
                                <Input placeholder='Minimum 10 digits' />
                            </div>
                            <div className='right__div'>
                                <label htmlFor="email" className="right__label">Email Id</label><br />
                                <Input placeholder='Localpart@domain' />
                            </div>
                            <div className="right__captcha">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    className="right__captcha__input"
                                />
                                <p className="right__captcha__text">I'm not a robot</p>
                                <img
                                    src="/assets/svg/recaptcha_icon.svg"
                                    alt="recaptcha"
                                    className="right__captcha__img"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="wrapper__bottom">
                <div className="wrapper__bottom__follow_page">
                    <h3 className="wrapper__bottom__follow_page__heading">FOLLOW US ON</h3>
                    <div className="wrapper__bottom__follow_page__icon">
                        <img
                            src="/assets/png/twitter_1.png"
                            alt="twitter"
                            className="icon_img"
                        />
                        <img
                            src="/assets/png/facebook_1.png"
                            alt="facebook"
                            className="icon_img"
                        />
                        <img
                            src="/assets/png/linkedin_1.png"
                            alt="linkedin"
                            className="icon_img"
                        />
                        <img
                            src="/assets/png/youtube_1.png"
                            alt="youtube"
                            className="icon_img"
                        />
                    </div>
                    <p className="wrapper__bottom__follow_page__copyright_text">
                        © Since 2016. NLDSL All Rights Reserved
                    </p>
                </div>
                <div className="wrapper__bottom__download">
                    <div className="wrapper__bottom__download__google_play">
                        <img
                            src="/assets/png/google_play_1.png"
                            alt="google play"
                            className="google_play_img"
                        />
                    </div>
                    <div className="wrapper__bottom__download__app_store">
                        <img src="/assets/svg/app_store.svg" alt="app store" />
                    </div>
                </div>
                <div className="wrapper__bottom__visitor_count">
                    <p className="wrapper__bottom__visitor_count__number">90,377,485</p>
                    <p className="wrapper__bottom__visitor_count__text">Visitors Count</p>
                </div>
                <button className="wrapper__bottom__btn">
                    <img
                        src="/assets/png/chat.png"
                        alt="chat_icon"
                        className="wrapper__bottom__btn__img"
                    />
                    &ensp;Chat
                </button>
            </div>
        </div>
    )
}

export default ContactForm;