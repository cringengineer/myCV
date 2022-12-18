import React, {FC} from 'react';
import style from './languages.module.css'
const Languages:FC = () => {
    return (
        <div id={'languages'} className={style.languages__wrapper}>
            <h5 className={style.title}>Languages:</h5>
            <ul className={style.languages__container}>
                <li className={style.language}>English: B1</li>
                <li className={style.language}>Russian: C2</li>
                <li className={style.language}>Belarusian: B2</li>
            </ul>
        </div>
    );
};

export default Languages;