import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importe o CSS do react-toastify

const ToastNotifications = () => {
  return (
    <ToastContainer
      position="top-right" 
      autoClose={3000} 
      hideProgressBar 
      newestOnTop 
      closeOnClick={false} 
      rtl={false} 
      pauseOnFocusLoss={false} 
      draggable={false} 
      pauseOnHover={false}
    />
  );
};

export default ToastNotifications;
