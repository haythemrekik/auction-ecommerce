import { useEffect, useState } from 'react';

const useRealtime = (socketUrl: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const socket = new WebSocket(socketUrl);

        socket.onopen = () => {
            console.log('WebSocket connection established');
            setLoading(false);
        };

        socket.onmessage = (event) => {
            try {
                const parsedData = JSON.parse(event.data);
                setData(parsedData);
            } catch (e) {
                setError('Error parsing WebSocket data');
            }
        };

        socket.onerror = (event) => {
            setError('A WebSocket error occurred.');
            setLoading(false);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, [socketUrl]);

    return { data, error, loading };
};

export default useRealtime;