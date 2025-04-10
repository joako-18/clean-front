import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ViveroPage } from '../../features/viveros/presentation/pages/ViveroPage';
import { PlantaPage } from '../../features/plantas/presentation/pages/PlantaPage';
export const NavigationWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="bg-green-600 p-4 text-white">
        <ul className="flex justify-around">
          <li>
            <NavLink to="/viveros" className="text-lg">Viveros</NavLink>
          </li>
          <li>
            <NavLink to="/plantas" className="text-lg">Plantas</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/viveros" element={<ViveroPage />} />
        <Route path="/plantas" element={<PlantaPage />} />
      </Routes>
    </BrowserRouter>
  );
};
