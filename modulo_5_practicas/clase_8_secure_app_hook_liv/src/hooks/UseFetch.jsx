import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Error al obtener datos');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [url]);
    return { data, error };
}

export default useFetch;