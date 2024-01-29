import React from 'react';
import HomeComponent from '../components/HomeComponent';
import Header from '../components/Header';
import ShuffleRecipes from '../components/ShuffleRecipes';
const HomePage = () => {
  return (
    <>
      {' '}
      <Header /> <HomeComponent />
      <ShuffleRecipes />
    </>
  );
};

export default HomePage;
