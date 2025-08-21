import React from 'react'
import { FiCheck, FiAlertCircle, FiInfo } from 'react-icons/fi';

function SuccessModal({ message, open, icon, onClose }) {

    switch (icon) {
        case 'success':
            icon = <FiCheck className="h-5 w-5 text-green-500" />;
            break;
        case 'error':
            icon = <FiAlertCircle className="h-5 w-5 text-red-500" />;
            break;
        case 'warning':
            icon = <FiAlertCircle className="h-5 w-5 text-yellow-500" />;
            break;
        case 'info':
            icon = <FiInfo className="h-5 w-5 text-blue-500" />;
            break;
        default:
            break;
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {open && <div>
                {icon}
                <p>{message}</p>
                <button onClick={handleClose}>Close</button>
            </div>}
        </>
    )
}

export default SuccessModal