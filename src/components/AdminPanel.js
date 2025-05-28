import React, { useState } from 'react';

const AdminPanel = ({ profiles, onAddProfile, onEditProfile, onDeleteProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({
    id: '',
    name: '',
    description: '',
    image: '',
    location: { lat: 0, lng: 0 }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onEditProfile(currentProfile);
    } else {
      onAddProfile({ ...currentProfile, id: Date.now() });
    }
    resetForm();
  };

  const handleEdit = (profile) => {
    setCurrentProfile(profile);
    setIsEditing(true);
  };

  const resetForm = () => {
    setCurrentProfile({
      id: '',
      name: '',
      description: '',
      image: '',
      location: { lat: 0, lng: 0 }
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Profile' : 'Add New Profile'}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={currentProfile.name}
            onChange={(e) => setCurrentProfile({ ...currentProfile, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={currentProfile.description}
            onChange={(e) => setCurrentProfile({ ...currentProfile, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            value={currentProfile.image}
            onChange={(e) => setCurrentProfile({ ...currentProfile, image: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Latitude</label>
            <input
              type="number"
              step="any"
              value={currentProfile.location.lat}
              onChange={(e) => setCurrentProfile({
                ...currentProfile,
                location: { ...currentProfile.location, lat: parseFloat(e.target.value) }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Longitude</label>
            <input
              type="number"
              step="any"
              value={currentProfile.location.lng}
              onChange={(e) => setCurrentProfile({
                ...currentProfile,
                location: { ...currentProfile.location, lng: parseFloat(e.target.value) }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {isEditing ? 'Update Profile' : 'Add Profile'}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Manage Profiles</h3>
        <div className="space-y-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <h4 className="font-medium">{profile.name}</h4>
                <p className="text-sm text-gray-600">{profile.description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(profile)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteProfile(profile.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 