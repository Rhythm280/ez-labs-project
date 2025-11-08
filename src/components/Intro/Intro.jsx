import React from 'react';
import styles from './Intro.module.css';

// TODO: Make sure all these paths are correct in your src/assets/ folder
import stickyNote from '../../assets/sticky-note.png';
import indiaGate from '../../assets/india-gate.svg';
import silhouettes from '../../assets/people-silhouettes.svg';
import arrowBranding from '../../assets/arrow-branding.svg';
import arrowFilm from '../../assets/arrow-film.svg';
import arrowArt from '../../assets/arrow-art.svg';

const Intro = () => {
    return (
        // We use the global 'container' class and our local module class
        <section id="intro" className={`${styles.introSection} container`}>

            {/* Left Column (Sticky Note) */}
            <div className={styles.stickyNoteContainer}>
                <div className={styles.stickyNote}>
                    {/* We layer the text on top of the image */}
                    <img src={stickyNote} alt="Sticky note" />
                    {/* <p>
                        Some craft films. Some build brands. Some curate art.
                        We bring it all together - a collective of storytellers
                        driven by one belief: every project deserves to be
                        more than just a message; it should become a masterpiece.
                    </p> */}
                </div>
            </div>

            {/* Right Column (Illustrations) */}
            <div className={styles.illustrationContainer}>
                {/* This is a container for all the positioned doodles */}
                <div className={styles.illustration}>
                    <img
                        src={indiaGate}
                        alt="India Gate"
                        className={styles.indiaGate}
                    />

                    <div className={styles.labelBranding}>
                        <span>Branding Experts</span>
                        <img src={arrowBranding} alt="arrow pointing to branding experts" />
                    </div>

                    <img
                        src={silhouettes}
                        alt="Team silhouettes"
                        className={styles.silhouettes}
                    />

                    <div className={styles.labelFilm}>
                        <img src={arrowFilm} alt="arrow pointing to film makers" />
                        <span>Film Makers</span>
                    </div>

                    <div className={styles.labelArt}>
                        <img src={arrowArt} alt="arrow pointing to art curators" />
                        <span>Art Curators</span>
                    </div>
                </div>
            </div>

            {/* Bottom Row (CTA) - Spans both columns */}
            <div className={styles.cta}>
                <p>Take a closer look at the stories V bring to life.</p>
                <a href="#portfolio" className={styles.button}>View Portfolio</a>
            </div>
        </section>
    );
};

export default Intro;