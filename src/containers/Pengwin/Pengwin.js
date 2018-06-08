import React, { Component } from 'react';
import styles from './Pengwin.scss';

class Pengwin extends Component {
    render() {
        return (
            <div className={styles.Pengwin}>
                <p onClick={this.props.infoClick}>Hello World!</p>
            </div>
        );
    }
}

export default Pengwin;