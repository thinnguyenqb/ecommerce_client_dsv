import { notification } from 'antd';

const getNotificationStyle = type => {
  return {
    success: {
      color: 'rgba(0, 0, 0, 0.65)',
      border: '1px solid #b7eb8f',
      backgroundColor: '#f6ffed',
      marginTop: '50px',
      marginRight: '50px'
    },
    warning: {
      color: 'rgba(0, 0, 0, 0.65)',
      border: '1px solid #ffe58f',
      backgroundColor: '#fffbe6',
      marginTop: '50px',
      marginRight: '50px'
    },
    error: {
      color: 'rgba(0, 0, 0, 0.65)',
      border: '1px solid #ffa39e',
      backgroundColor: '#fff1f0',
      marginTop: '50px',
      marginRight: '50px'
    },
    info: {
      color: 'rgba(0, 0, 0, 0.65)',
      border: '1px solid #91d5ff',
      backgroundColor: '#e6f7ff',
      marginTop: '50px',
      marginRight: '50px'
    }
  }[type]
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Notification = (msg, type, key) => {
    notification[type]({
    key: key,
    message: capitalizeFirstLetter(type),
    description: msg,
    duration: 2,
    style: getNotificationStyle(type),
    });
};
export default Notification;