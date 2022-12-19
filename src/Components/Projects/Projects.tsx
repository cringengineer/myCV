import React from 'react';
import style from './projets.module.css';
import pokedex from './../../img/pokedex.png';
import shelter from './../../img/shelter.png';
import weather from './../../img/weather.png';
import recipe from './../../img/recipe.png';
import note from './../../img/notes.png';

interface project {
    name: string;
    description: string;
    link: string;
    photo: string;
    id:number
}

const Projects = () => {

    const myProjects: project[] = [
        {
            name: 'Pokedex',
            link: 'https://cringengineer.github.io/pokedex/',
            description: 'Key stack technologies: HTML/CSS, JS.',
            photo: pokedex,
            id:1
        },
        {
            name: 'Shelter',
            link: 'https://rolling-scopes-school.github.io/cringengineer-JSFE2022Q1/shelter/pages/main/index.html',
            description: 'Key stack technologies: HTML/CSS.',
            photo: shelter,
            id:2
        },
        {
            name: 'Weather forecast',
            link: 'https://cringengineer-weather.netlify.app/',
            description: 'Key stack technologies: HTML/CSS, React, React hooks.',
            photo: weather,
            id:4
        },
        {
            name: 'Recipes book',
            link: 'https://cringengineer-recipe-book.netlify.app/',
            description: 'Key stack technologies: HTML/CSS, React, Redux, React-Redux, Redux-thunk.',
            photo: recipe,
            id:6
        },
        {
            name: 'Notes',
            link: 'https://startling-stroopwafel-7d2f59.netlify.app/',
            description: 'Key stack technologies: HTML/CSS, React, SCSS, TS. The functionality is still in progress.',
            photo: note,
            id:5
        },
    ]

    return (
        <div id={'projects'}>
            <h6 className={style.title}>Projects:</h6>
            <div  className={style.projects__wrapper}>
            {myProjects.map(item => {
                return <div key={item.id} className={style.container}>
                    <a href={item.link}>
                        <div className={style.text}>
                            <p className={style.project__name}>{item.name}</p>
                            <p className={style.description}>{item.description}</p>
                        </div>
                        <img className={style.project__img} alt={'project photo'} src={item.photo}></img>
                    </a>
                </div>
            })}
            </div>
        </div>
    );
};

export default Projects;