import React from 'react';

const Profile = ({ profile, onShowMap }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
          <p className="text-gray-600 mt-1">{profile.description}</p>
          <button
            onClick={() => onShowMap(profile)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Show on Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 