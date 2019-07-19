import React,{useContext} from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
    const alertConext = useContext(AlertContext);
    const {alerts} = alertConext;
    return ( 
        alerts.length >0 &&
        alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/>{alert.msg}
            </div>
        )) 
        
     );
}
 
export default Alert;