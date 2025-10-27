import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getUserProfile } from '../services/api';
import WalletWidget from '../components/WalletWidget';
import { User } from '../types';

const ProfilePage = () => {
    const { user } = useAuth();
    const [profileData, setProfileData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (user) {
                try {
                    const data = await getUserProfile(user.id);
                    setProfileData(data);
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    if (!profileData) {
        return <div>Could not load profile data.</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <h2>{profileData.name}</h2>
            <p>Email: {profileData.email}</p>
            <p>Credits: {profileData.credits}</p>
            <WalletWidget balance={profileData.credits} />
        </div>
    );
};

export default ProfilePage;