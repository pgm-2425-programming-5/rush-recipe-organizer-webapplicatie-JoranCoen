import React, { useState } from 'react';

interface Recipe {
    name: string;
    category: string;
    ingredients: string[];
    instructions: string;
}

interface RecipeFormProps {
    onAddRecipe: (recipe: Recipe) => void;
    onClose: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onAddRecipe, onClose }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState('');

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleIngredientChange = (index: number, value: string) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newRecipe = { name, category, ingredients, instructions };
        onAddRecipe(newRecipe);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl text-black font-bold mb-4">Voeg een nieuw recept toe</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black mb-2">Naam</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border rounded p-2 w-full text-black"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-black mb-2">Categorie</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border rounded p-2 w-full text-black"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-black mb-2">Ingrediënten</label>
                        {ingredients.map((ingredient, index) => (
                            <div key={index} className="flex mb-2">
                                <input
                                    type="text"
                                    value={ingredient}
                                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                                    className="border rounded p-2 w-full text-black"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={handleAddIngredient}
                                    className="ml-2 bg-blue-500 text-white rounded px-2"
                                    disabled={ingredients.length >= 4}
                                >
                                    +
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mb-4">
                        <label className="block text-black mb-2">Bereidingsinstructies</label>
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            className="border rounded p-2 w-full text-black"
                            required
                        />
                    </div>

                    <div className="flex">
                        <button
                            type="submit"
                            className="bg-green-500 text-white rounded px-4 py-2"
                        >
                            Voeg recept toe
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="ml-2 text-red-500"
                        >
                            Annuleer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecipeForm;
