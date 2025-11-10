import React from 'react'

const Profile = ({ profile }) => {
    if (!profile) {
        return <div>Loading...</div> // Handle null or undefined profile
    }

    return (
        <div>
            <h1>{profile.name || 'No Name Available'}</h1>
            <p>Email: {profile.email || 'No Email Available'}</p>
            <img src={profile.avatar || '/default-avatar.png'} alt="Avatar" />
        </div>
    )
}

export default Profile
