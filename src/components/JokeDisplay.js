import React from 'react';
import styles from '../styles/JokeDisplay.module.css';

function JokeDisplay({ joke }) {
    return <p>{joke}</p>;
}

export default JokeDisplay;