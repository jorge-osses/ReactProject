import { useContext } from "react";
import NotificationContext from "../../context/NotificationContext";
import './Notification.css'

const Notification = () => {
    const { notification, setNotification } = useContext(NotificationContext)

    if(notification.message === '') {
        return null;
    }

    return(
    <div className={notification.severity === 'error' ? 'Error' : 'Success' } onClick={() => setNotification('success', '')}>
        {notification.message}
    </div>
    )
}

export default Notification;