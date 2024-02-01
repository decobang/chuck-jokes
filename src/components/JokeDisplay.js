import React from 'react';
import styles from '../styles/JokeDisplay.module.css';

function JokeDisplay({ joke }) {
    return <div className={styles['joke-container']}>
        <p>{joke}</p>
    </div>
}

export default JokeDisplay;