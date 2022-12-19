import React, {FC} from 'react';
import style from './education.module.css';

const Education:FC = () => {
    return (
        <div id={'education'} className={style.education__wrapper}>
            <h4 className={style.title}>Education and courses:</h4>
            <p className={style.item}><b>2020-2024</b> Belarusian State Technological University(chemical engineer-technologist)</p>
            <p className={style.item}><b>2022</b> RS school «JavaScript/Front-end» Q1 st1, st2</p>
            <p className={style.item}><b>2019-2020</b> Mogilev State Polytechnic College(welder)</p>
            <p className={style.item}>Internet sources: <a className={style.src__link} href={'https://learn.javascript.ru/'}>"learn javascript" by "Ilya Kantor"</a>, <a className={style.src__link} href={'https://reactjs.org/'}>react documentation</a>, <a className={style.src__link} href={'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8'}>react course by "IT-Kamasutra"</a> </p>
            <p className={style.item}>Paper sources: "JavaScript: The Definitive Guide" by "David Flanagan"</p>
        </div>
    );
};

export default Education;