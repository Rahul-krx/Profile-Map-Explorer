import React, { useState } from 'react';
import Profile from './Profile';

const ProfileList = ({ profiles, onShowMap }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    
    const filtered = profiles.filter(profile =>
      profile.name.toLowerCase().includes(value.toLowerCase()) ||
      profile.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-4">
        {filteredProfiles.map((profile) => (
          <Profile
            key={profile.id}
            profile={profile}
            onShowMap={onShowMap}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileList; 