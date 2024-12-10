import React from 'react';

const Home = () => {
    const styles = {
        heroSection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '50px',
            backgroundColor: '#0b2a58',
            backgroundImage: `
            linear-gradient(
                to right,
                rgba(126, 126, 230, 0.6), 
                rgba(126, 126, 230, 0.2)
            ),
            url(https://www.truecaller.com/cms/93591a2714917a73fed51ff5cd043950.avif)`,

            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            minHeight: '55vh',
        },
        content: {
            maxWidth: '600px',
        },
        heading: {
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '20px',
            lineHeight: '1.2',
            fontFamily: 'Arial, sans-serif'
        },
        description: {
            fontSize: '1rem',
            marginBottom: '30px',
        },
        buttonsContainer: {
            display: 'flex',
            gap: '15px',
            marginBottom: '30px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center',
        },
        tryButton: {
            backgroundColor: '#0078ff',
            color: '#ffffff',
        },
        storeButton: {
            backgroundColor: '#ffffff',
            color: '#000000',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        phoneInputContainer: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: '5px 10px',
            borderRadius: '5px',
            maxWidth: '400px',
        },
        phoneInput: {
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            marginLeft: '10px',
        },
        searchIcon: {
            fontSize: '1.2rem',
            cursor: 'pointer',
        },
    };

    return (
        <section style={styles.heroSection}>
            <div style={styles.content}>
                <h1 style={styles.heading}>
                    Empowering Voices, Bridging Gaps, Connecting Everyone
                </h1>
                <div style={styles.buttonsContainer}>
                    <button style={{ ...styles.button, ...styles.tryButton }}>
                        Try AshaktBhashini
                    </button>
                    <button style={{ ...styles.button, ...styles.storeButton }}>
                        <span>Google Play</span>
                        <span>4.5 ⭐</span>
                    </button>
                    <button style={{ ...styles.button, ...styles.storeButton }}>
                        <span>App Store</span>
                        <span>4.5 ⭐</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
