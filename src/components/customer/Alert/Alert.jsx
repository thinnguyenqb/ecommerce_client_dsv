import React from 'react'
import { useSelector } from 'react-redux'
import Notification from './Notification'

const Alert = () => {
  const { alert } = useSelector(state => state)

  return (
    <div>
      {/* {alert.loading && <Loading/>}  */}
      {
        alert?.error && 
        Notification(alert?.error, "error", 1)
      }
      {
        alert?.success && 
        Notification(alert?.success, "success", 2)
      }
      {
        alert?.warning && 
        Notification(alert?.warning, "warning", 3)
      }
    </div>
  )
}

export default Alert
