import React, {FC, useState} from 'react';
import style from './header.module.css';
import BurgerMenu from "./BurgerMenu";

const Header: FC = () => {

    let [menuActive, setMenuActive] = useState(false);

    return (
        <div className={style.header__container}>
            <ul className={style.nav__menu}>
                <li><a href='#profile' className={style.nav__link}>Profile</a></li>
                <li><a href='#skills' className={style.nav__link}>Skills</a></li>
                <li><a href='#education' className={style.nav__link}>Education</a></li>
                <li><a href='#languages' className={style.nav__link}>Languages</a></li>
                <li><a href='#projects' className={style.nav__link}>Projects</a></li>
            </ul>

            <div className={style.burger__container}>
                <div onClick={() => setMenuActive(!menuActive)}
                     className={menuActive ? style.active__burger__btn : style.burger__btn}><span></span></div>
            </div>
            <BurgerMenu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
};

export default Header;