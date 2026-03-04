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
import Aizeshka from './src/pages/Aizeshka';
import NotFound from './src/pages/NotFound';

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <Navigation />
        <main className="min-h-screen font-sans bg-neutral-950">
          <Routes>
            <Route path="/q3dbgmez1zaad2g" element={<Venera />} />
            <Route path="/2kiats4rculy0wr" element={<Lina />} />
            <Route path="/f2fqq81hwn3yonn" element={<Dilnaz />} />
            <Route path="/bnnvibqgsehbgd4" element={<Akku />} />
            <Route path="/tiz7jcslyzalp4s" element={<Alisa />} />
            <Route path="/0hko5f9l6r1z3ku" element={<Banu />} />
            <Route path="/3p9yuuis013wuth" element={<Aigerim />} />
            <Route path="/v8ko9y3ypqakjvp" element={<Bagila />} />
            <Route path="/8wywvqx0ga0sg2q" element={<Aizeshka />} />
            <Route path="/" element={<Navigate to="/venera" replace />} />
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
