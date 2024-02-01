import React from 'react';
import styles from '../styles/CategorySelector.module.css';

function CategorySelector({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div className={styles['categories-container']}>
            {categories.map((category) => (
                <div 
                    key={category} 
                    className={`${styles.category} ${category === selectedCategory ? styles['category-selected'] : ''}`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    );
}

export default CategorySelector;