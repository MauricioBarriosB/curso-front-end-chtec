import React, { useState, Profiler, Suspense } from 'react';
import HeaderMenu from '@layouts/HeaderMenu';
import Footer from '@layouts/Footer';

function App() {
    const [view, setView] = useState('HomeView');
    const HomeView = React.lazy(() => import('@views/HomeView'));
    const MedicalTeamView = React.lazy(() => import('@views/MedicalTeamView'));
    const AppointmentView = React.lazy(() => import('@views/AppointmentView'));

    const handleViewSelect = (view) => {
        setView(view);
        console.clear();
        console.log('* Loading View :', view);
    };
  
    const onRenderCallback = (id, phase, actualDuration) => {
        console.log(`* Profiler: ${id} (${phase}) took ${actualDuration.toFixed(2)} ms to render.`);
    };

    return (
        <>
        <HeaderMenu onViewSelect={handleViewSelect}/>

        <Profiler id="content" onRender={onRenderCallback}>

            <Suspense fallback={<p>Cargando página...</p>}>
            {{
                'HomeView': <HomeView/>,
                'MedicalTeamView': <MedicalTeamView />,
                'AppointmentView': <AppointmentView/>,
            }[view]}
            </Suspense>

        </Profiler>

        <Footer />
        </>
    );
}

export default App;