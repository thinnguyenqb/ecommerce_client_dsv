import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import Notification from './Notification'

const Alert = () => {
  const { alert } = useSelector(state => state)

  useEffect(() => {
    // {alert.loading && <Loading/>}
    alert?.error && 
      Notification(alert?.error, "error", 1)
    
      alert?.success && 
      Notification(alert?.success, "success", 2)
    
      alert?.warning && 
      Notification(alert?.warning, "warning", 3)
    
  }, [alert?.error, alert?.success, alert?.warning]);
  return null
}

export default Alert
