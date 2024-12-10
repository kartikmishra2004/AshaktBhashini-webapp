import React from 'react';

const SlidingCards = () => {
    const styles = {
        container: {
            display: 'flex',
            overflowX: 'auto',
            gap: '20px',
            padding: '20px',
            scrollbarWidth: 'none', // For Firefox
        },
        card: {
            flex: '0 0 auto', // Prevents shrinking
            width: '300px',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#0078FF',
            color: '#fff',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
        },
        cardHover: {
            transform: 'scale(1.05)',
        },
        featureTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        featureDescription: {
            fontSize: '1rem',
            lineHeight: '1.5',
        },
    };

    const features = [
        { title: 'Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Feature 2', description: 'Pellentesque accumsan orci eu odio blandit, nec varius quam feugiat.' },
        { title: 'Feature 3', description: 'Donec ac semper risus, nec luctus erat.' },
        { title: 'Feature 4', description: 'Etiam ultricies justo vel metus vehicula porttitor.' },
        { title: 'Feature 5', description: 'Fusce at arcu eget augue consectetur pharetra.' },
    ];

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div style={styles.container}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={styles.card}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <h3 style={styles.featureTitle}>{feature.title}</h3>
                        <p style={styles.featureDescription}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidingCards;
