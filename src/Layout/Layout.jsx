import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      {children}
      {/* Contact page  footer hide */}
      <Footer
        variant={pathname.startsWith("/contact") ? "contact" : "default " }
      />
    </>
  );
};

export default MainLayout;
