import React from 'react';
import styles from './Portfolio.module.css';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- FIXED: All paths match your asset files ---
import cameraDoodle from '../../assets/doodle-camera-reel.svg';
import filmStrip from '../../assets/film-strip-frame.png';
import videoThumbnail from '../../assets/video-thumbnail.jpg';
// FIXED: Removed missing 'border-pattern-corner.png' import

const Portfolio = () => {
    // TODO: Add state and logic here if you want to build a real carousel

    return (
        // We use the global 'container' class and our local module class
        <section id="portfolio" className={`${styles.portfolioSection} container`}>

            {/* Decorative doodles, positioned with CSS */}
            <img src={cameraDoodle} alt="Camera doodle" className={styles.cameraDoodle} />

            <h2 className={styles.title}>The Highlight Reel</h2>
            <p className={styles.subtitle}>Watch the magic we've captured.</p>

            <div className={styles.carousel}>
                <button className={styles.arrow} aria-label="Previous slide"><FaChevronLeft /></button>

                {/* Main video player container */}
                <div className={styles.videoContainer}>
                    {/* This 'a' tag makes the whole thing a clickable link */}
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // TODO: Add your real video link
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.videoPlayer}
                        aria-label="Play highlight reel"
                    >
                        {/* The thumbnail image */}
                        <img src={videoThumbnail} alt="Highlight Reel" className={styles.thumbnail} />

                        {/* The play button icon */}
                        <div className={styles.playButton}>
                            <FaPlay />
                        </div>

                        {/* The film strip is a decorative overlay, positioned with CSS */}
                        <img src={filmStrip} alt="Film strip frame" className={styles.filmStripFrame} />
                    </a>
                </div>

                <button className={styles.arrow} aria-label="Next slide"><FaChevronRight /></button>
            </div>

            {/* FIXED: Removed missing cornerPattern img tag */}
        </section>
    );
};

export default Portfolio;