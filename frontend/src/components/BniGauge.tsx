import React from 'react';

interface BniGaugeProps {
    currentCrocos: number;
    requiredCrocos: number;
}

const BniGauge: React.FC<BniGaugeProps> = ({ currentCrocos, requiredCrocos }) => {
    const percentage = Math.min((currentCrocos / requiredCrocos) * 100, 100);

    return (
        <div className="bni-gauge">
            <div className="gauge-background">
                <div className="gauge-fill" style={{ width: `${percentage}%` }} />
            </div>
            <div className="gauge-label">
                {currentCrocos} / {requiredCrocos} Crocos
            </div>
        </div>
    );
};

export default BniGauge;