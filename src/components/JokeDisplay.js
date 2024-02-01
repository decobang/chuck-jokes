import React from 'react';
import styles from '../styles/JokeDisplay.module.css';
import { useSwipeable } from 'react-swipeable';

function JokeDisplay({ joke, onSwipeLeft }) {
    const handlers = useSwipeable({
        onSwipedLeft: () => onSwipeLeft(),
    });

    return (
        <div {...handlers} className={styles['joke-container']}>
            <p>{joke}</p>
        </div>
    );
}

export default JokeDisplay;