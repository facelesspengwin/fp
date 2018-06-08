import React, { Component } from 'react';

import styles from './Layout.scss';

class Layout extends Component {

    render() {
        return(
            <div className={styles.Layout}>
                <div className={styles.InnerContainer}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;