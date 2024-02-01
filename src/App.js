import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategorySelector from './components/CategorySelector';
import JokeDisplay from './components/JokeDisplay';
import styles from './App.module.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(response => {
        setCategories(response.data);
        setSelectedCategory(response.data[0]);
      });
  }, []);

  const getRandomJoke = (category) => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(response => {
        setJoke(response.data.value);
      });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleButtonClick = () => {
    getRandomJoke(selectedCategory);
  };
  return (
    <div className={styles['main-container']}>
      <h1 className={styles['title']}>Chuck-Jokes</h1>
        <CategorySelector 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      <JokeDisplay joke={joke} />
  
     <button className={styles.button} onClick={handleButtonClick}>Next</button>
    </div>
  );
}

export default App;