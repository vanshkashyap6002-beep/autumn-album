import React from 'react';
import { createRoot } from 'react-dom/client';
import { Album } from './Album';
import { autumnAlbum } from './album-data';
import './styles.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Album album={autumnAlbum}/></React.StrictMode>);
