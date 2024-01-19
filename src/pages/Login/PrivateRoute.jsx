import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { auth } from "../../../firebase";

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser;
  return user && user.email === "colivier@diginamic-formation.fr" ? (
    <>
      <Header />
      {children}
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
