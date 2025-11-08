import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

// FIXED: The path now matches your filename "v-film.svg"
import vFilmsLogo from '../../assets/v-film.svg';

const Navbar = () => {
    // State to manage the full-screen overlay
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // Links for the overlay
    const links = [
        { name: 'Services', href: '#services' },
        { name: 'Their Stories', href: '#portfolio' },
        { name: 'Our Story', href: '#intro' },
        { name: 'Varnan', href: '#hero' },
    ];

    return (
        <>
            {/* The header bar that is always visible */}
            <header className={styles.header}>
                <a href="#hero" className={styles.logo}>
                    <img src={vFilmsLogo} alt="Varnan Films Logo" />
                </a>

                {/* Hamburger menu button */}
                <button onClick={toggleMenu} className={styles.menuButton} aria-label="Open menu">
                    <FaBars />
                </button>
            </header>

            {/* The full-screen overlay menu */}
            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
                <button
                    onClick={toggleMenu}
                    className={styles.closeButton}
                    aria-label="Close menu"
                >
                    <FaTimes />
                </button>

                <nav className={styles.overlayMenu}>
                    {links.map((link) => (
                        <a key={link.name} href={link.href} onClick={toggleMenu}>
                            {link.name}
                        </a>
                    ))}
                    {/* This button also closes the menu */}
                    <a
                        href="#contact"
                        className={styles.letsTalkButton}
                        onClick={toggleMenu}
                    >
                        Let's Talk
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Navbar;