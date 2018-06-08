import React from 'react';
import styles from './Header.scss';

import Logo from '../Logo/Logo';
import Navigate from '../Buttons/NavButtons/Navigate';

const Header = () => {
    return(
        <header className={styles.Header}>
            <Logo />
            <Navigate />
        </header>
    );
}

export default Header;