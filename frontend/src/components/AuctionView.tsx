import React from 'react';
import useRealtime from '../hooks/useRealtime';
import BniGauge from './BniGauge';
import BidButton from './BidButton';
import WalletWidget from './WalletWidget';
import { useAuth } from '../contexts/AuthContext';
import { Auction } from '../types';

interface AuctionViewProps {
    auction: Auction;
}

const AuctionView: React.FC<AuctionViewProps> = ({ auction }) => {
    const { user } = useAuth();
    const { data, error, loading } = useRealtime(auction.id);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    const { currentBid, bids, timeLeft } = data;

    return (
        <div className="auction-view">
            <h1>{auction.productName}</h1>
            <img src={auction.productImage} alt={auction.productName} />
            <p>Valeur Marché: {auction.marketValue} DT</p>
            <p>Prix Actuel: {currentBid} DT</p>
            <p>Temps Restant: {timeLeft} secondes</p>
            <BniGauge currentCrocos={bids} requiredCrocos={auction.marketValue} />
            <BidButton auctionId={auction.id} />
            {user && <WalletWidget balance={user.credits} />}
        </div>
    );
};

export default AuctionView;