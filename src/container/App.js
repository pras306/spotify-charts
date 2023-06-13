import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Sidebar } from '../components';
import { Discover, TopArtists, TopCharts, ArtistLists, SongDetails, ArtistDetails } from './index';

const App = () => {
  return (
    <div className="mp">
      <Sidebar />
      <div className="mp__content">
        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/top-artists' element={<TopArtists />} />
          <Route path='/top-charts' element={<TopCharts />} />
          <Route path='/artists-charts' element={<ArtistLists />} />
          <Route path='/songs/:songId' element={<SongDetails />} />
          <Route path='/artists/:artistId' element={<ArtistDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
