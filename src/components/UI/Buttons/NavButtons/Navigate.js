import React from 'react';
import styles from './Navigate.scss';

import Left from '../../../../assets/imgs/buttons/Left@2x.png';
import LeftPress from '../../../../assets/imgs/buttons/left_press@2x.png';

import Right from '../../../../assets/imgs/buttons/right@2x.png';
import RightPress from '../../../../assets/imgs/buttons/right_press@2x.png';

const Navigate = () => {
    return(
        <nav className={styles.Navigate}>
            <img className={styles.Left}
                 src={Left}
                 onMouseOver={e => (e.currentTarget.src = {LeftPress})}
                 onMouseOut={e => (e.currentTarget.src = {Left})}
                 alt='Navigate Back' />
            <img className={styles.Right}
                 src={Right}
                 onMouseOver={e => (e.currentTarget.src = {RightPress})}
                 onMouseOut={e => (e.currentTarget.src = {Right})}
                 alt='Navigate Forward' />
        </nav>
    );
}

export default Navigate;