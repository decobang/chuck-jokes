import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CategorySelector from './components/CategorySelector';
import JokeDisplay from './components/JokeDisplay';
import styles from './App.module.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [joke, setJoke] = useState('');
  const [usedJokeIds, setUsedJokeIds] = useState([]);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(response => {
        setCategories(response.data);
        setSelectedCategory(response.data[0]);
        getRandomJoke(response.data[0]); // Call getRandomJoke here
      });
  }, []);

  

  const getRandomJoke = useCallback((category) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (!usedJokeIds.includes(data.id)) {
          setJoke(data.value);
          setUsedJokeIds([...usedJokeIds, data.id]);
        } else {
          getRandomJoke(category);
        }
      });
  }, [usedJokeIds]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  function Header() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Chuck-N-Jokes</h1>
      </header>
    );
  }

  return (
    <div className={styles['main-container']}>
      <Header />
        <CategorySelector 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
    <JokeDisplay joke={joke} onSwipeLeft={() => getRandomJoke(selectedCategory)} />
    <button className={styles.button} onClick={() => getRandomJoke(selectedCategory)}>Next</button>
    </div>
  );
}

export default App;