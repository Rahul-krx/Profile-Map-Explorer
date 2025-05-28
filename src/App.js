import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import AdminPanel from './components/AdminPanel';

// Sample data - In a real application, this would come from an API
const initialProfiles = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Software Engineer based in New York',
    image: 'https://via.placeholder.com/150',
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'UX Designer from San Francisco',
    image: 'https://via.placeholder.com/150',
    location: { lat: 37.7749, lng: -122.4194 }
  }
];

// Load profiles from localStorage or use initial profiles
const loadProfiles = () => {
  const savedProfiles = localStorage.getItem('profiles');
  return savedProfiles ? JSON.parse(savedProfiles) : initialProfiles;
};

function App() {
  const [profiles, setProfiles] = useState(loadProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  const handleShowMap = (profile) => {
    setSelectedProfile(profile);
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const handleEditProfile = (editedProfile) => {
    setProfiles(profiles.map(profile => 
      profile.id === editedProfile.id ? editedProfile : profile
    ));
  };

  const handleDeleteProfile = (profileId) => {
    setProfiles(profiles.filter(profile => profile.id !== profileId));
    if (selectedProfile?.id === profileId) {
      setSelectedProfile(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Profile Map Explorer</h1>
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            {isAdminMode ? 'View Profiles' : 'Admin Panel'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {isAdminMode ? (
          <AdminPanel
            profiles={profiles}
            onAddProfile={handleAddProfile}
            onEditProfile={handleEditProfile}
            onDeleteProfile={handleDeleteProfile}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ProfileList profiles={profiles} onShowMap={handleShowMap} />
            </div>
            <div className="sticky top-6">
              <Map selectedProfile={selectedProfile} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
