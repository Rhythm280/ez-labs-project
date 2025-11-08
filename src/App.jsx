import React from 'react';
import styles from './App.module.css';

// Import all your components from their folders
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className={styles.App}>
            {/* Navbar is outside main so it can be fixed */}
            <Navbar />

            {/* Main content of your single-page site */}
            <main>
                <Hero />
                <Intro />
                <Stats />
                <Services />
                <Portfolio />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}

export default App;