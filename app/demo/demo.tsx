"use client";

import React, { useState } from 'react';

const Demo: React.FC = () => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [inputText, setInputText] = useState('');

    const handleAnalyzeClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent the default button behavior
        setIsAnalyzing(true);
        try {
            const response = await fetch(`/api/senti?text=${encodeURIComponent(inputText)}`);
            const data = await response.json();
            // Handle the response data as needed
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div>
            <h1>Welcome to the New Page!</h1>
            <p>This is a new page in your application.</p>
            <div>
                <label htmlFor="textInput" className="block mb-2 text-sm font-medium text-gray-700">Enter your text:</label>
                <input
                    type="text"
                    id="textInput"
                    placeholder="Type your text here"
                    className="w-full px-3 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button
                    type="button" // Ensure the button type is set to "button"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleAnalyzeClick}
                >
                </button>
                {isAnalyzing && <p className="mt-2 text-sm text-gray-700">analyzing...</p>}
            </div>
        </div>
    );
};

export default Demo;
