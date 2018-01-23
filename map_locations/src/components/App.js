import React from 'react'

import Search from './Search'
import Map from './Map'
import CurrentLocation from './CurrentLocation'
import LocationList from './LocationList'
import './App.css'

const App = () => (
  <div className="App">
    <h1>Your Google Maps Locations</h1>
    <Search />
    <Map />
    <CurrentLocation />
    <LocationList />
  </div>
)

export default App
