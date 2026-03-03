import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './src/components/Navigation';
import Venera from './src/pages/Venera';
import Lina from './src/pages/Lina';
import Dilnaz from './src/pages/Dilnaz';
import Akku from './src/pages/Akku';
import Alisa from './src/pages/Alisa';
import Banu from './src/pages/Banu';
import Aigerim from './src/pages/Aigerim';
import Bagila from './src/pages/Bagila';
import NotFound from './src/pages/NotFound';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <Navigation />
        <main className="min-h-screen font-sans bg-neutral-950">
          <Routes>
            <Route path="*" element={<Navigate to="/venera" replace />} />
            <Route path="/venera" element={<Venera />} />
            <Route path="/lina" element={<Lina />} />
            <Route path="/dilnaz" element={<Dilnaz />} />
            <Route path="/akku" element={<Akku />} />
            <Route path="/alisa" element={<Alisa />} />
            <Route path="/banu" element={<Banu />} />
            <Route path="/aigerim" element={<Aigerim />} />
            <Route path="/bagila" element={<Bagila />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;