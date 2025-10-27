import React from 'react';
import useRealtime from '../hooks/useRealtime';
import BniGauge from './BniGauge';
import BidButton from './BidButton';
import WalletWidget from './WalletWidget';

const AuctionView = ({ auction }) => {
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
            <BniGauge userBids={bids} />
            <BidButton auctionId={auction.id} />
            <WalletWidget />
        </div>
    );
};

export default AuctionView;