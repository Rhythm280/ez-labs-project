import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {/* TODO: Get exact email and phone from video (00:37) */}
                <a href="mailto:vrnita@varnanfilms.co.in">vrnita@varnanfilms.co.in</a>
                <span>|</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <p className={styles.copyright}>
                © 2025 Varnan Films. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;