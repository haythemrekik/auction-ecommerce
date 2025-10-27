import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuctionView from '../../components/AuctionView';
import { fetchAuctionDetails } from '../../services/api';
import { Auction } from '../../types';

const AuctionPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [auction, setAuction] = useState<Auction | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (typeof id === 'string') {
            const getAuctionDetails = async () => {
                try {
                    const data = await fetchAuctionDetails(id);
                    setAuction(data);
                } catch (err) {
                    setError('Failed to fetch auction details.');
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            getAuctionDetails();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!auction) {
        return <div>Auction not found.</div>;
    }

    return (
        <div>
            <AuctionView auction={auction} />
        </div>
    );
};

export default AuctionPage;