import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';


export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if(!alert) {
        return null;
    }
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
            <strong>Attention!</strong>
            {alert.text}
            <button type="button" className="close" data-bs-dismiss="alert" aria-label="Close">&times;</button>
        </div>
    )
}