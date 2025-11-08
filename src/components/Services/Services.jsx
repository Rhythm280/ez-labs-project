import React, { useState } from 'react';
import styles from './Services.module.css';

// --- FIXED: All paths now match your asset files, including typos ---
import filmImage from '../../assets/film-production.png';
import brandingImage from '../../assets/branding.png';
import artImage from '../../assets/art-curation.png';

import filmDetailImage from '../../assets/film-detail-image.jpg';
import brandingDetailImage from '../../assets/branding-detail-image.jpg';
import artDetailImage from '../../assets/art-detail-image.jpg';

import polaroidTape from '../../assets/polarois-tape.png'; // Fixed typo
import borderPattern from '../../assets/border-pattern-bottom.png';
import exploreArrow from '../../assets/doodle-explore-arrow.svg';

// --- FIXED: Importing the individual doodle icons you have ---
import doodleCameraOld from '../../assets/doodle-camera-old.svg';
import doodleCameraNew from '../../assets/doodle-camera-new.svg';
import doodleTripod from '../../assets/doodle-tripode.svg'; // Fixed typo

import brandingVec1 from '../../assets/branding-vector1.svg';
import brandingVec2 from '../../assets/branding-vector2.svg';
import brandingVec3 from '../../assets/branding-vector3.svg';
import brandingVec4 from '../../assets/branding-vector4.svg';

import artIcon1 from '../../assets/art-curation-icon1.svg';
import artIcon2 from '../../assets/art-curation-icon2.svg';
import artIcon3 from '../../assets/art-curation-icon3.svg';
import artIcon4 from '../../assets/art-curation-icom4.svg'; // Fixed typo


// --- Detail View Sub-Components ---
const FilmDetail = ({ onBack }) => (
    <div className={styles.detailContainer}>
        <button onClick={onBack} className={styles.backButton}>&lt; Back</button>
        <div className={styles.quote}>"Filmmaking is a chance to live many lifetimes." – Robert Altman</div>
        <div className={styles.detailContent}>
            <img src={filmDetailImage} alt="Film" className={styles.detailImage} />
            <div className={styles.detailText}>
                <h3>Who says films are just an escape?</h3>
                <p>We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.</p>
                <strong>V crafts:</strong>
                <ul>
                    <li>Documentaries</li>
                    <li>Corporate Videos</li>
                    <li>2D Animation Videos</li>
                    <li>3D Animation Videos</li>
                </ul>
            </div>
            {/* FIXED: Using the individual icons in a grid */}
            <div className={styles.doodleGrid}>
                <img src={doodleCameraOld} alt="Film Doodle 1" />
                <img src={doodleCameraNew} alt="Film Doodle 2" />
                <img src={doodleTripod} alt="Film Doodle 3" />
            </div>
        </div>
        <a href="#contact" className={styles.exploreButton}>
            Explore Now <img src={exploreArrow} alt="arrow" />
        </a>
    </div>
);

const BrandingDetail = ({ onBack }) => (
    <div className={styles.detailContainer}>
        <button onClick={onBack} className={styles.backButton}>&lt; Back</button>
        <div className={styles.quote}>"A brand is a voice, and a product is a souvenir." – Lisa Gansky</div>
        <div className={styles.detailContent}>
            <img src={brandingDetailImage} alt="Branding" className={styles.detailImage} />
            <div className={styles.detailText}>
                {/* TODO: Fill in text from video (00:54) */}
                <h3>A brand isn't just what you see...</h3>
                <p>It's what you remember, what you carry home, and what you trust...</p>
                <strong>V creates:</strong>
                <ul>
                    <li>Branding & Communication</li>
                    <li>Market Mapping</li>
                    {/* ... etc ... */}
                </ul>
            </div>
            {/* FIXED: Using the individual icons in a grid */}
            <div className={styles.doodleGrid}>
                <img src={brandingVec1} alt="Branding Doodle 1" />
                <img src={brandingVec2} alt="Branding Doodle 2" />
                <img src={brandingVec3} alt="Branding Doodle 3" />
                <img src={brandingVec4} alt="Branding Doodle 4" />
            </div>
        </div>
        <a href="#contact" className={styles.exploreButton}>
            Explore Now <img src={exploreArrow} alt="arrow" />
        </a>
    </div>
);

const ArtDetail = ({ onBack }) => (
    <div className={styles.detailContainer}>
        <button onClick={onBack} className={styles.backButton}>&lt; Back</button>
        <div className={styles.quote}>"V take art where it belongs, to the people." – Vernita Verma</div>
        <div className={styles.detailContent}>
            <img src={artDetailImage} alt="Art Curation" className={styles.detailImage} />
            <div className={styles.detailText}>
                {/* TODO: Fill in text from video (00:57) */}
                <h3>Art isn't meant to sit on distant walls...</h3>
                <p>It's meant to breathe, to travel, to belong...</p>
                <strong>V curates:</strong>
                <ul>
                    <li>Art Festivals</li>
                    <li>Live Performances</li>
                    {/* ... etc ... */}
                </ul>
            </div>
            {/* FIXED: Using the individual icons in a grid */}
            <div className={styles.doodleGrid}>
                <img src={artIcon1} alt="Art Doodle 1" />
                <img src={artIcon2} alt="Art Doodle 2" />
                <img src={artIcon3} alt="Art Doodle 3" />
                <img src={artIcon4} alt="Art Doodle 4" />
            </div>
        </div>
        <a href="#contact" className={styles.exploreButton}>
            Explore Now <img src={exploreArrow} alt="arrow" />
        </a>
    </div>
);


// --- Main Services Component ---
const Services = () => {
    // This state tracks which view is active: 'main', 'film', 'branding', or 'art'
    const [selectedService, setSelectedService] = useState('main');

    // This function decides which component to show
    const renderContent = () => {
        switch (selectedService) {
            case 'film':
                return <FilmDetail onBack={() => setSelectedService('main')} />;
            case 'branding':
                return <BrandingDetail onBack={() => setSelectedService('main')} />;
            case 'art':
                return <ArtDetail onBack={() => setSelectedService('main')} />;
            case 'main':
            default:
                // This is the main view with 3 Polaroid cards (00:18)
                return (
                    <>
                        <h2 className={styles.title}>The storyboard reveals the breadth of our craft.</h2>
                        <div className={styles.cardGrid}>

                            {/* Card 1: Film Production */}
                            <div className={styles.card} onClick={() => setSelectedService('film')}>
                                <img src={polaroidTape} alt="tape" className={styles.tape} />
                                <img src={filmImage} alt="Film Production" className={styles.cardImage} />
                                <h3>Film Production</h3>
                            </div>

                            {/* Card 2: Branding */}
                            <div className={styles.card} onClick={() => setSelectedService('branding')}>
                                <img src={polaroidTape} alt="tape" className={styles.tape} />
                                <img src={brandingImage} alt="Branding" className={styles.cardImage} />
                                <h3>Branding</h3>
                            </div>

                            {/* Card 3: Art Curation */}
                            <div className={styles.card} onClick={() => setSelectedService('art')}>
                                <img src={polaroidTape} alt="tape" className={styles.tape} />
                                <img src={artImage} alt="Art Curation" className={styles.cardImage} />
                                <h3>Art Curation</h3>
                            </div>
                        </div>
                    </>
                );
        }
    };

    return (
        <section id="services" className={styles.servicesSection}>
            {/* Use the global 'container' class */}
            <div className="container">
                {renderContent()}
            </div>

            {/* The decorative border at the bottom */}
            <img src={borderPattern} alt="Floral border" className={styles.borderPattern} />
        </section>
    );
};

export default Services;