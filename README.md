# Profile Map Explorer

A React application that allows users to view profiles and their locations on an interactive map.

## Features

- View a list of profiles with images and descriptions
- Interactive map integration with Google Maps
- Search and filter profiles
- Responsive design for all devices
- Show profile locations on the map
  
  ## ScreenShots
  ![image](https://github.com/user-attachments/assets/40329aae-81c6-48ab-a888-40340b9f1081)
![image](https://github.com/user-attachments/assets/54fbf7f3-dc00-4d41-89de-7305471ad59d)


## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Maps API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Google Maps API key:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. The application will open in your default browser at `http://localhost:3000`
2. Browse through the list of profiles on the left side
3. Use the search bar to filter profiles by name or description
4. Click "Show on Map" to view a profile's location on the map
5. The map will automatically center on the selected profile's location

## Technologies Used

- React
- Tailwind CSS
- Google Maps API
- React Google Maps
- Headless UI
- Heroicons

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
