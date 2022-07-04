import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Buy from './pages/Buy';
import NoPage from './pages/NoPage';
import AboutMe from './pages/AboutMe';
import Category from './pages/Category';
import Edit from './pages/Edit';
import Collection from './pages/Collection';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buy/:id/" element={<Buy />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="collection" element={<Collection />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
