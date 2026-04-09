import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";


import About from "./pages/About/About";
import Service from "./pages/Service/Services";
import Products from "./pages/Products/Products";
import Industries from "./pages/Industries/Industries";
import StartupLunchpad from "./pages/Startup/StartupLunchpad";
import ContactUs from "./pages/contact/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/startup-lunchpad" element={<StartupLunchpad />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
