import React from 'react';
import style from './projets.module.css';
import pokedex from './../../img/pokedex.png';
import shelter from './../../img/shelter.png';
import mem from './../../img/mem.png';
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
            description: 'In this project I  wrote search, filtering and popup.',
            photo: pokedex,
            id:1
        },
        {
            name: 'Shelter',
            link: 'https://rolling-scopes-school.github.io/cringengineer-JSFE2022Q1/shelter/pages/main/index.html',
            description: 'Layout example.This project is a two-page website with an adaptive layout.',
            photo: shelter,
            id:2
        },
        {
            name: 'CSS-mem-slider',
            link: 'https://cringengineer.github.io/cssMemSlider/cssMemSlider/index.html',
            description: 'In this project, I created a slider in pure CSS without using JS.',
            photo: mem,
            id:3
        },
        {
            name: 'Weather forecast',
            link: 'https://cringengineer-weather.netlify.app/',
            description: 'In this project I created a weather forecast on React Hooks.',
            photo: weather,
            id:4
        },
        {
            name: 'Notes',
            link: 'https://startling-stroopwafel-7d2f59.netlify.app/',
            description: 'Application for notes. In it you can create, edit, delete notes. The functionality is still in progress.',
            photo: note,
            id:5
        },
        {
            name: 'Recipes book',
            link: 'https://cringengineer-recipe-book.netlify.app/',
            description: 'You can view recipes, add them to favorites, and also search for recipes by ingredients.',
            photo: recipe,
            id:6
        }
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
                        <img className={style.project__img} alt={'photo'} src={item.photo}></img>
                    </a>
                </div>
            })}
            </div>
        </div>
    );
};

export default Projects;