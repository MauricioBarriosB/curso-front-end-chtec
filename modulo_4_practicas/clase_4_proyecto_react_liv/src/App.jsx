import { useState, useEffect } from 'react';
import HeaderMedicalTeam from './components/HeaderMedicalTeam';
import DoctorsList from './components/DoctorsList';
import ServicesList from './components/ServicesList';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

import './main.css';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  // * useEffect Hook allows you to perform side effects (ex: fetching data, directly updating the DOM, timers, etc.)
  // * in your components. Fetch data - from DB simulation :

  useEffect(() => {
    setDoctors([
      {
        id: 1,
        photo: './images/medico1.jpg',
        name: 'Samuel Neil',
        specialty: 'Medicina General',
        experience: 12,
      },
      {
        id: 2,
        photo: './images/medico2.jpg',
        name: 'Francisco Garcia',
        specialty: 'Medicina Nuclear',
        experience: 15,
      },
      {
        id: 3,
        photo: './images/medico3.jpg',
        name: 'John Doe',
        specialty: 'Neurología',
        experience: 6,
      },
      {
        id: 4,
        photo: './images/medico4.jpg',
        name: 'Josefina Duarte',
        specialty: 'Fonoaudiología',
        experience: 10,
      },
      {
        id: 5,
        photo: './images/medico5.jpg',
        name: 'Alberto Fuentes',
        specialty: 'Cardiología',
        experience: 20,
      },
      {
        id: 6,
        photo: './images/medico6.jpg',
        name: 'Erica Soto',
        specialty: 'Medicina General',
        experience: 5,
      },
    ]);

    setServices([
      { id: 1, name: 'Medicina General' },
      { id: 2, name: 'Medicina Nuclear' },
      { id: 3, name: 'Neurología' },
      { id: 4, name: 'Fonoaudiología' },
      { id: 5, name: 'Cardiología' },
      { id: 6, name: 'Pediatría' },
    ]);
  }, []);

  return (
    <>
      <div className='container pt-4 pb-2'>
        <HeaderMedicalTeam />
        <div className='container marketing'>
          <DoctorsList doctors={doctors} />
          <ServicesList services={services} />
          <AppointmentForm/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
