import React from 'react';

function CategorySelector({ categories, selectedCategory, onCategoryChange }) {
    return (
        <select value={selectedCategory} onChange={onCategoryChange}>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
}

export default CategorySelector;