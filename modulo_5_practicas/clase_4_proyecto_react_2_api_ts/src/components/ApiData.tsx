import React, { useEffect, useState } from 'react';

interface ApiData {
    id: number;
    title: string;
}


const ApiData: React.FC = () => {
    const [data, setData] = useState<ApiData[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result.slice(0, 5)); // Mostrar solo los primeros 5 elementos
            } catch (err) {
                setError('Error al cargar los datos de la API');
            }
        };

        fetchData();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Datos de la API</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApiData;
