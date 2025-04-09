import React from 'react';
import './App.css';
import { NavigationWrapper } from './core/navigation/NavigationWrapper';
import { ViveroPage } from './features/viveros/presentation/pages/ViveroPage';
import { PlantaPage } from './features/plantas/presentation/pages/PlantaPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationWrapper />
      <div className="container mx-auto p-4">
        {/* Routes go here */}
        <ViveroPage />
        <PlantaPage />
      </div>
    </div>
  );
};

export default App;
