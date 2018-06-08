import React from 'react';
import styles from './Footer.scss';

const Footer = () => {
    const copyYear = new Date().getFullYear();

    return(
        <footer className={styles.Footer}>
            <p className={styles.Copyright} >&copy; {copyYear} Faceless Pengwin</p>
            <p className={styles.PowerReact} >Powered By React</p>
        </footer>
    );
}

export default Footer;