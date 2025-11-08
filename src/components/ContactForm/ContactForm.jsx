import React, { useState } from 'react';
import axios from 'axios'; // We can now import this
import styles from './ContactForm.module.css';

// These paths are correct based on your screenshot
import mandalaLeft from '../../assets/mandala-contact-left.svg';
import mandalaRight from '../../assets/mandala-contact-right.svg';

const ContactForm = () => {
    // State for the form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    // State for validation errors
    const [errors, setErrors] = useState({});

    // State for API status
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [apiError, setApiError] = useState('');

    // --- 1. Handle Input Change ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // --- 2. Validation Logic ---
    const validateForm = () => {
        let tempErrors = {};

        // Check for empty fields
        if (!formData.name.trim()) tempErrors.name = 'Name is required.';
        if (!formData.email.trim()) tempErrors.email = 'Email is required.';
        if (!formData.phone.trim()) tempErrors.phone = 'Phone is required.';
        if (!formData.message.trim()) tempErrors.message = 'Message is required.';

        // Check for valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email.trim() && !emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address.';
        }

        setErrors(tempErrors);

        // Return true if there are no errors
        return Object.keys(tempErrors).length === 0;
    };

    // --- 3. Handle Form Submission ---
    // --- 3. Handle Form Submission ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setApiError('');

        // Run validation
        if (validateForm()) {
            setIsLoading(true);
            const API_ENDPOINT = 'https://vernanbackend.ezlab.in/api/contact-us/';

            try {
                const response = await axios.post(API_ENDPOINT, formData);

                // --- FIXED: Now checking for 200 OR 201 ---
                if (response.status === 200 || response.status === 201) {
                    setSuccessMessage('Form Submitted'); // This will NOW appear
                    setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
                    setErrors({});
                }
            } catch (error) {
                // Handle API errors
                console.error('API Error:', error);
                setApiError('An error occurred. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    // Helper component for showing errors
    const FormError = ({ message }) => (
        message ? <p className={styles.errorMessage}>{message}</p> : null
    );

    return (
        <section id="contact" className={styles.contactSection}>
            <img src={mandalaLeft} alt="" className={styles.mandalaLeft} />
            <img src={mandalaRight} alt="" className={styles.mandalaRight} />

            <div className={`${styles.container} container`}>

                {/* Left Column: Text (00:35) */}
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Join the Story</h2>
                    <p className={styles.subtitle}>Ready to bring your vision to life? Let's talk.</p>
                    <p className={styles.description}>
                        Whether you have an idea, a question, or simply want
                        to explore how V can work together, V're just a
                        message away.
                    </p>
                    <p className={styles.description}>
                        Let's catch up over coffee.
                        Great stories always begin with a good conversation.
                    </p>
                </div>

                {/* Right Column: Form */}
                <form onSubmit={handleSubmit} className={styles.form} noValidate>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your name*</label>
                        <input
                            type="text" name="name" id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? styles.inputError : ''}
                        />
                        <FormError message={errors.name} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your email*</label>
                        <input
                            type="email" name="email" id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.inputError : ''}
                        />
                        <FormError message={errors.email} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone*</label>
                        <input
                            type="tel" name="phone" id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? styles.inputError : ''}
                        />
                        <FormError message={errors.phone} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Your message*</label>
                        <textarea
                            name="message" id="message" rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? styles.inputError : ''}
                        />
                        <FormError message={errors.message} />
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={styles.button}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
                    {apiError && <div className={styles.apiError}>{apiError}</div>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;