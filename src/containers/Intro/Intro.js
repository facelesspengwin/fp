import React, { Component } from 'react';
import styles from './Intro.scss';

import Logo from '../../assets/imgs/logo/logo.svg';

class Intro extends Component {
    render() {
        return (
            <div className={styles.Intro}>
                <img className={styles.Logo} src={Logo} alt="Site Logo" />
                <div className={styles.Begin}>
                    <p onClick={this.props.beginClick}>START YOUR ADVENTURE</p>
                </div>
            </div>
        );
    }
}

export default Intro;