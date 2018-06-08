import React from 'react';
import styles from './Logo.scss';

import logo from '../../../assets/imgs/logo/logo.png';

const Logo = () => {
    return(
        <div className={styles.Logo}>
            <img className={styles.LogoImg} src={logo} alt='Site Logo'/>
        </div>
    );
}

export default Logo;