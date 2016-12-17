import React from 'react';
import { Link } from 'react-router';

const Footer = () => {

    const styles = {
        container: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#ffff01',
            width: '100%'
        },
        text: {
            textAlign: 'center',
            // color: '#FFF',
            marginBottom: 0
        }
    };

    return (
        <div className="container-fluid footer-container" style={styles.container}>
            <p style={styles.text}>{`Copyright © ${new Date().getFullYear()}`}</p>
            <p style={styles.text}>
            </p>
        </div>
    );
};

export default Footer;
