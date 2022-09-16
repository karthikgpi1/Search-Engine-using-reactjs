import React, { createContext, useContext,useState } from "react";

const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
     const [results, setResults] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [searchTerm, setSearchTerm] = useState('');

     // /videos, /search, /images

     const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch (`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '281f10b7d9msh36c2b70d3f38484p1752f1jsnf1459b4fad7a',
            }
        });

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
             {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);