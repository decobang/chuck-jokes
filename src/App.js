import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CategorySelector from "./components/CategorySelector";
import JokeDisplay from "./components/JokeDisplay";
import styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [joke, setJoke] = useState("");
  const [usedJokeIds, setUsedJokeIds] = useState([]);

  const getRandomJoke = useCallback(
    (category) => {
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
    },
    [usedJokeIds]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    getRandomJoke(category); // Fetch a new joke when the category changes
  };

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        setCategories(response.data);
        setSelectedCategory(response.data[0]);
        getRandomJoke(response.data[0]); // Call getRandomJoke here
      });

     
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.mainContainer}>
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange} // Renamed prop to onCategoryChange
        />
        <JokeDisplay joke={joke} getRandomJoke={getRandomJoke} />
        <div className={styles.buttonContainer}>
          <button onClick={() => getRandomJoke(selectedCategory)}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;