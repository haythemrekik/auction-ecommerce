import React from 'react';

interface BidButtonProps {
    onBid: () => void;
    isDisabled: boolean;
}

const BidButton: React.FC<BidButtonProps> = ({ onBid, isDisabled }) => {
    return (
        <button 
            onClick={onBid} 
            disabled={isDisabled} 
            className={`bid-button ${isDisabled ? 'disabled' : ''}`}
        >
            {isDisabled ? 'Enchère fermée' : 'Enchérir'}
        </button>
    );
};

export default BidButton;