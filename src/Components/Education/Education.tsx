import React, {FC} from 'react';
import style from './education.module.css'
const Education:FC = () => {
    return (
        <div id={'education'} className={style.education__wrapper}>
            <h4 className={style.title}>Education:</h4>
            <p className={style.item}>2020-2024 Belarusian State Technological University(chemical engineer-technologist)</p>
            <p className={style.item}>2019-2020 Mogilev State Polytechnic College(welder)</p>
        </div>
    );
};

export default Education;