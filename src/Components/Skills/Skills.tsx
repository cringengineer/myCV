import React, {FC} from 'react';
import style from './skills.module.css';

const Skills: FC = () => {
    const mySkills:Array<string> = ['HTML/CSS','SASS/LESS','JS','Webpack','TypeScript','React','Redux','Redux-thunk','Git','Figma','REST-API', 'Next.js', 'Storybook', 'Styled components', 'Websocket']

    return (
        <div id={'skills'} className={style.skills__wrapper}>
            <h3 id='skills' className={style.title}>Skills:</h3>
            <ul className={style.skills__container}>
                {mySkills.map(item => {
                    return <li className={style.skill}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default Skills;