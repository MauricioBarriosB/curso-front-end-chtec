import React, { useState } from 'react';
import Form from './components/Form';
import Notification from './components/Notification';
import ApiData from './components/ApiData';
import { sendFormData } from './services/apiService';

const App: React.FC = () => {
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const handleFormSubmit = async (formData: { name: string; email: string; message: string }) => {
        console.log('Datos del formulario:', formData);
        try {
            const response = await sendFormData(formData);
            setNotification({ message: response.message, type: 'success' });
        } catch (err: any) {
            setNotification({ message: err.message, type: 'error' });
        }
    };

    return (
        <div>
            <h1>Proyecto React con TypeScript</h1>
            <Form onSubmit={handleFormSubmit} />
            {notification && <Notification message={notification.message} type={notification.type} />}
            <ApiData />
        </div>
    );
};

export default App;
