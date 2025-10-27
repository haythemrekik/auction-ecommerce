import { useEffect, useState } from 'react';

const useRealtime = (socketUrl) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const socket = new WebSocket(socketUrl);

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
            setLoading(false);
        };

        socket.onerror = (event) => {
            setError('WebSocket error: ' + event.message);
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