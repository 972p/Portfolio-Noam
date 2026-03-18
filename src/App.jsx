import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Diplomas from './components/Diplomas';
import E5 from './components/E5';
import Entreprise from './components/Entreprise';
import PreparationPoste from './components/PreparationPoste';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <div className="app-container">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Diplomas />
                    <Experience />
                    <Entreprise />
                    <PreparationPoste />
                    <Projects />
                    <E5 />
                </main>
                <Contact />
            </div>
        </>
    );
}

export default App;
