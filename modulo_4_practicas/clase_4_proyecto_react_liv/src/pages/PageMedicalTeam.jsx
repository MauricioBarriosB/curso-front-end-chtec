import { useState, useEffect, Profiler } from 'react';
import DoctorsList from '@components/DoctorsList';
import ServicesList from '@components/ServicesList';
import AppointmentForm from '@components/AppointmentForm';
import HeaderMedicalTeam from '@layouts/HeaderMedicalTeam';
import ProfileView from '@views/ProfileView';
import Footer from '@layouts/Footer';

function PageMedicalTeam() {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  // * Set onRenderCallback in conjuntion to React Profiler to log incomes :

  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`* Profiler: ${id} (${phase}) took ${actualDuration.toFixed(2)} ms to render.`);
  };

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
        biography: 'una breve descripción biográfica del doctor Samuel Neil, el cual posee 12 años de experiencia y servicio médico.'
      },
      {
        id: 2,
        photo: './images/medico2.jpg',
        name: 'Francisco Garcia',
        specialty: 'Medicina Nuclear',
        experience: 15,
        biography: 'una breve descripción biográfica del doctor Francisco Garcia, el cual posee 15 años de experiencia y servicio médico.'
      },
      {
        id: 3,
        photo: './images/medico3.jpg',
        name: 'John Doe',
        specialty: 'Neurología',
        experience: 6,
        biography: 'una breve descripción biográfica del doctor John Doe, el cual posee 6 años de experiencia y servicio médico.'
      },
      {
        id: 4,
        photo: './images/medico4.jpg',
        name: 'Josefina Duarte',
        specialty: 'Fonoaudiología',
        experience: 10,
        biography: 'una breve descripción biográfica de la doctora Josefina Duarte, la cual posee 10 años de experiencia y servicio médico.'
      },
      {
        id: 5,
        photo: './images/medico5.jpg',
        name: 'Alberto Fuentes',
        specialty: 'Cardiología',
        experience: 20,
        biography: 'una breve descripción biográfica del doctor Alberto Fuentes, el cual posee 20 años de experiencia y servicio médico.'
      },
      {
        id: 6,
        photo: './images/medico6.jpg',
        name: 'Erica Soto',
        specialty: 'Medicina General',
        experience: 5,
        biography: 'una breve descripción biográfica de la doctora Erica Soto, la cual posee 5 años de experiencia y servicio médico.'
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
          <Profiler id="DoctorList" onRender={onRenderCallback}>
            <DoctorsList doctors={doctors}/>
          </Profiler>
          <ServicesList services={services} />
          <AppointmentForm/>
          <ProfileView/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageMedicalTeam;