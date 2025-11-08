import React from 'react';
import styles from './Hero.module.css';

// This path is correct based on your screenshot
import heroMandala from '../../assets/hero-mandala.svg';

const Hero = () => {
    return (
        // We use the global 'container' class (from index.css)
        // and our local module class (from Hero.module.css)
        <section id="hero" className={`${styles.heroSection} container`}>

            {/* Column 1: Mandala */}
            <div className={styles.mandalaContainer}>
                <img
                    src={heroMandala}
                    alt="Varnan Mandala"
                    className={styles.mandala}
                />
            </div>

            {/* Column 2: Text Content */}
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    Varnan is where stories find
                    their voice and form
                </h1>
                <p className={styles.subtitle}>
                    Films . Brands . Art
                </p>
                <p className={styles.description}>
                    Since 2008, V've been telling stories - stories of people,
                    their journeys, and the places that shape them.
                    Some begin in polished boardrooms, others in humble
                    village squares. But every story starts the same way - by
                    listening with intention. V believes it takes trust, patience,
                    and an eye for the unseen to capture what truly matters.
                    V doesn't just tell stories - V honors them.
                </p>
            </div>
        </section>
    );
};

export default Hero;