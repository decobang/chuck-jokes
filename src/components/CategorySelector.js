import React from 'react';
import styles from '../styles/CategorySelector.module.css';

function CategorySelector({ categories, selectedCategory, onCategoryChange }) {
    return (
        <select className={styles.selector} value={selectedCategory} onChange={onCategoryChange}>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}

export default CategorySelector;