import React, {FC} from 'react';
import style from "./header.module.css";
const BurgerMenu: FC<{ active: boolean, setActive: Function }> = ({active, setActive}) => {
    return (
        <div>
            <div className={active ? style.menuactive : style.menu}>
                <div className={style.menu__content}>
                    <a href='#profile' className={style.nav__link}>Profile</a>
                    <a href='#skills' className={style.nav__link}>Skills</a>
                    <a href='#education' className={style.nav__link}>Education</a>
                    <a href='#languages' className={style.nav__link}>Languages</a>
                    <a href='#projects' className={style.nav__link}>Projects</a>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;