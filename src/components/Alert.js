import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';


export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if(!alert.visible) {
        return null;
    }
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            {alert.text}
            <button 
                type="button" 
                className="close btn-close" 
                data-bs-dismiss="alert" 
                aria-label="Close"
                onClick={hide}></button>
        </div>
    )
} 