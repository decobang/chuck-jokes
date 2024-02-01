import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategorySelector from './components/CategorySelector';
import JokeDisplay from './components/JokeDisplay';

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
    <div className="container">
      <h1>Chuck Jokes</h1>
      <CategorySelector 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <button onClick={handleButtonClick}>Get Joke</button>
      <JokeDisplay joke={joke} />
    </div>
  );
}

export default App;