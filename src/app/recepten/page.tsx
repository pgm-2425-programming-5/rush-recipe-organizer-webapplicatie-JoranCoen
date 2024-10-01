'use client';

import { useEffect, useState } from 'react';
import Link from '../components/common/Link';
import Button from '../components/common/Button';
import RecipeForm from '../components/common/RecipeForm';
import ReceptenFilter from '../components/common/ReceptenFilter';

export default function Recepten() {
    const [recipes, setRecipes] = useState([]);
    const [isFormOpen, setFormOpen] = useState(false);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const storedRecipes = localStorage.getItem('recipes');
        if (storedRecipes) {
            const parsedRecipes = JSON.parse(storedRecipes);
            setRecipes(parsedRecipes);
            setFilteredRecipes(parsedRecipes);
            const uniqueCategories = Array.from(new Set(parsedRecipes.map(recipe => recipe.category)));
            setCategories(uniqueCategories);
        }
    }, []);

    const handleAddRecipe = (newRecipe) => {
        const updatedRecipes = [...recipes, newRecipe];
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        if (!categories.includes(newRecipe.category)) {
            setCategories([...categories, newRecipe.category]);
        }
        filterRecipesByCategory(selectedCategory, updatedRecipes);
    };

    const handleDeleteRecipe = (index) => {
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
        localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
        filterRecipesByCategory(selectedCategory, updatedRecipes);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        filterRecipesByCategory(category, recipes);
    };

    const filterRecipesByCategory = (category, recipesToFilter) => {
        if (category === '') {
            setFilteredRecipes(recipesToFilter);
        } else {
            setFilteredRecipes(recipesToFilter.filter(recipe => recipe.category === category));
        }
    };

    return (
        <div className="flex flex-col gap-5 items-center justify-center min-h-screen bg-gray-100">
            <ReceptenFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />
            <h1 className="text-4xl font-bold text-center text-black">Recepten</h1>
            <div className="flex items-center justify-center space-x-4">
                <Link href="/" label="Terug naar home" />
                <Button label="Voeg een recept toe" onClick={() => setFormOpen(true)} />
            </div>
            <div>
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe, index) => (
                        <div key={index} className="p-4 bg-white rounded shadow-md mb-4">
                            <h2 className="text-2xl text-black font-bold mb-2">{recipe.name}</h2>
                            <p className="text-sm text-black mb-4">{recipe.category}</p>
                            <h3 className="text-xl text-black font-semibold mb-2">Ingrediënten:</h3>
                            <ul className="list-disc list-inside mb-4">
                                {recipe.ingredients.map((ingredient, i) => (
                                    <li className="text-black" key={i}>{ingredient}</li>
                                ))}
                            </ul>
                            <h3 className="text-xl text-black font-semibold mb-2">Bereidingsinstructies:</h3>
                            <p className="text-black mb-5">{recipe.instructions}</p>
                            <Button
                                label="Delete Recipe"
                                onClick={() => handleDeleteRecipe(index)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-lg text-black mb-4">Geen recepten gevonden.</p>
                )}
            </div>
            {isFormOpen && (
                <RecipeForm
                    onAddRecipe={handleAddRecipe}
                    onClose={() => setFormOpen(false)}
                />
            )}
        </div>
    );
}
