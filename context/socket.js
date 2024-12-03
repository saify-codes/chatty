import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

// Create a context to store the socket instance
const SocketContext = createContext();

// The socket provider
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  // Create a socket connection once the component mounts
  useEffect(() => {
    
    const socketInstance = io("http://localhost:5000", {}); // replace with your server URL
    setSocket(socketInstance);

    socketInstance.on("connect", () =>
      console.log("%csocket connected", "color:green")
    );
    
    socketInstance.on("disconnect", () =>
      console.log("%csocket disconnected", "color:red")
    );

    return () => {
      if (socketInstance) socketInstance.disconnect();
    };
  }, []);

  // Pass the socket instance through the provider's value
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to access the socket context
export const useSocket = () => {
  return useContext(SocketContext);
};
