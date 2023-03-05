import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}
export default MyApp;
