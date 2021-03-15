import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import NavBar from './components/NavBar';
import AppFunction from './components/AppFunction'
const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer title= "Mis productos" />
      <AppFunction />
    </>
  );
}

export default App;
