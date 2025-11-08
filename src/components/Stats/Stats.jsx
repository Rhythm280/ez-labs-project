import React from 'react';
import styles from './Stats.module.css';

// FIXED: Path now matches your file 'mountain-sun-logo.svg' (singular)
import mountainLogos from '../../assets/mountain-sun-logo.svg';

const Stats = () => {
    return (
        // We use the global 'container' class and our local module class
        <section id="stats" className={`${styles.statsSection} container`}>

            {/* Left Column: Text and Stats */}
            <div className={styles.content}>
                <h2 className={styles.title}>A montage of familiar faces and names.</h2>
                <p className={styles.description}>
                    Some stories come from the biggest names. Others begin
                    with bold, rising voices. We've been fortunate to walk
                    alongside both - listening, creating, and building
                    stories that matter.
                </p>
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>85+</span>
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Happy Clients</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Experts Team</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Quote and Illustration */}
            <div className={styles.illustration}>
                <h2 className={styles.quote}>
                    "Every project is more than just a brief - it's a new
                    chapter waiting to be written. Together, we've crafted
                    tales that inspire, connect, and endure."
                </h2>
                <img
                    src={mountainLogos}
                    alt="Mountain and client logos"
                    className={styles.mountainImage}
                />
            </div>
        </section>
    );
};

export default Stats;