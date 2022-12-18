import React, {FC} from 'react';
import style from "./profile.module.css";
import photo from "./../../img/cv-photo.png";
import github from './../../img/icons8-github-squared-100.png';
import gmail from './../../img/icons8-gmail-logo-48.png';
import telegram from './../../img/icons8-telegram-app-50.png';
import phone from './../../img/icons8-phonebook-49.png';

const Profile: FC = () => {
    return (
        <div className={style.profile__wrapper}>
            <div className={style.photo__wrapper}>
                <img className={style.photo} src={photo} alt={'photo'}></img>
            </div>
            <h1 className={style.name}>Vyacheslav Lysenkov</h1>
            <p className={style.subtitle}>Frontend developer</p>
            <ul className={style.links__container}>
                <li className={style.link__git}><a href={'https://github.com/cringengineer'} className={style.link}><img
                    src={github} className={style.link__img}></img></a></li>
                <li className={style.link__telegram}><a href={'https://telegram.me/cringengineer'}
                                                        className={style.link}><img src={telegram}
                                                                                    className={style.link__img}></img></a>
                </li>
                <li className={style.link__gmail}><a href={'mailto: cringengineer@gmail.com'}
                                                     className={style.link}><img src={gmail}
                                                                                 className={style.link__img}></img></a>
                </li>
                <li className={style.link__phone}><a href={'tel:+375291164369'} className={style.link}><img src={phone}
                                                                                                            className={style.link__img}></img></a>
                </li>
            </ul>
            <div id='profile' className={style.profile__container}>
                <h2 className={style.title}>Profile:</h2>
                <p className={style.text}>I started my path in web development in the summer of 2021. When I completed
                    the RS School courses, I could say with confidence that they provided the necessary solid
                    theoretical and practical base.
                </p>
                <p className={style.text}>I want to get this post to gain experience in development and improve my hard
                    skills. I think that this would help me on my way, because I am ready to overcome difficulties,
                    multitask and practice a lot.</p>
                <p className={style.text}>I would like to get a job in your company, as it can help me gain invaluable
                    experience, meet wonderful people, while I can do what brings me pleasure!</p>
            </div>
        </div>
    );
};

export default Profile;