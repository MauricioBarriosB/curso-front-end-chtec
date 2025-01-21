import React from 'react';

interface NotificationProps {
    message: string;
    type: 'success' | 'error';
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    const styles = {
        success: { color: 'green' },
        error: { color: 'red' },
    };

    return <p style={styles[type]}>{message}</p>;
};

export default Notification;
