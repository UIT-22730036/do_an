import React, { createContext, useContext } from "react";
import { notification } from "antd";

// Create the notification context
const NotificationContext = createContext(null);

// Create a provider component
export const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  // Make the notification API available in the context value
  return (
    <NotificationContext.Provider value={api}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

// Create a custom hook to use the notification API
export const useNotification = () => {
  return useContext(NotificationContext);
};
