import React from 'react';

const WalletWidget: React.FC<{ balance: number }> = ({ balance }) => {
    return (
        <div className="wallet-widget">
            <h3>Votre Solde de Crocos</h3>
            <p>{balance} Crocos</p>
        </div>
    );
};

export default WalletWidget;