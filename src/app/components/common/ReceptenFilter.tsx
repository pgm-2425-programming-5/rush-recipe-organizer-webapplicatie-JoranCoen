import React from 'react';

interface ReceptenFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const ReceptenFilter: React.FC<ReceptenFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-black mb-2">Filter op categorie:</label>
            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="border rounded p-2 w-full text-black"
            >
                <option value="">Alle</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ReceptenFilter;