import React from 'react';

interface WalletWidgetProps {
    balance?: number;
}

const WalletWidget: React.FC<WalletWidgetProps> = ({ balance }) => {
    if (typeof balance === 'undefined') {
        return null;
    }

    return (
        <div className="wallet-widget">
            <h3>Votre Solde de Crocos</h3>
            <p>{balance} Crocos</p>
        </div>
    );
};

export default WalletWidget;