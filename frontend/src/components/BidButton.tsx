import React, { useState } from 'react';
import { placeBid } from '../services/api';

interface BidButtonProps {
    auctionId: string;
}

const BidButton: React.FC<BidButtonProps> = ({ auctionId }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleBid = async () => {
        setLoading(true);
        setError(null);
        try {
            // For now, we'll hardcode the bid amount. This should be dynamic in a real app.
            const bidAmount = 10;
            await placeBid(auctionId, bidAmount);
            // Maybe show a success message
        } catch (err) {
            setError('Failed to place bid.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button 
                onClick={handleBid} 
                disabled={loading} 
                className={`bid-button ${loading ? 'disabled' : ''}`}
            >
                {loading ? 'Placing bid...' : 'Enchérir'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default BidButton;