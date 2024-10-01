import React from 'react';

interface HeroProps {
    name: string;
    ingredients: string[];
    instructions: string;
    category: 'Ontbijt' | 'Lunch' | 'Diner' | 'Dessert';
}

const Hero: React.FC<HeroProps> = ({ name, ingredients, instructions, category }) => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-500 mb-4">{category}</p>
            <h3 className="text-xl font-semibold mb-2">Ingrediënten:</h3>
            <ul className="list-disc list-inside mb-4">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Bereidingsinstructies:</h3>
            <p>{instructions}</p>
        </div>
    );
};

export default Hero;