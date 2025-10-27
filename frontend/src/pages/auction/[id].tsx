import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuctionView from '../../components/AuctionView';
import { fetchAuctionDetails } from '../../services/api';
import useRealtime from '../../hooks/useRealtime';

const AuctionPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [auction, setAuction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const getAuctionDetails = async () => {
                const data = await fetchAuctionDetails(id);
                setAuction(data);
                setLoading(false);
            };
            getAuctionDetails();
        }
    }, [id]);

    useRealtime(id, auction);

    if (loading) {
        return <div>Loading...</div>;
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