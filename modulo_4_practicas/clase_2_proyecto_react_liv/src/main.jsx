import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PageMedicalTeam from '@pages/PageMedicalTeam';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageMedicalTeam />
  </StrictMode>,
)