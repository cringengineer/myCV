import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Languages from "./Components/Languages/Languages";
import Projects from "./Components/Projects/Projects";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Profile/>
            <Skills />
            <Education />
            <Languages />
            <Projects />
        </div>
    );
}

export default App;
